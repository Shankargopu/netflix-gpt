import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { auth } from "../utils/firebase_auth";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  // const appRouter = createBrowserRouter([
  //   ,
  // ]);
  return (
    <div>
      {/* <Login />
      <Browse /> */}
      <Header/>
      {/* {/* <RouterProvider router={appRouter} /> */}
      <Outlet />
    </div>
  );
};

export default Body;
