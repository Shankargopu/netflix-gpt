import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { auth } from "../utils/firebase_auth";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  // const appRouter = createBrowserRouter([
  //   ,
  // ]);
  return (
    <div className="overflow-x-hidden">
      {/* <Login />
      <Browse /> */}
      <Header />
      {/* {/* <RouterProvider router={appRouter} /> */}
      <Outlet />
    </div>
  );
};

export default Body;
