import { Provider } from "react-redux";
import "./App.css";

import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from "./components/Form";
import Browse from "./components/Browse";
// import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Form";
import Body from "./components/Body";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/Browse",
          element: <Browse/>,

          // children: [
          //   {
          //     path: "/Browse",
          //     element: <Browse />,
          //   },
          // ],
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
