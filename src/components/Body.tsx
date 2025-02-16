import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Form";
import Browse from "./Browse";
import Header from "./Header";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);
  return (
    <>
      {/* <Login />
      <Browse /> */}
      <Header />
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
