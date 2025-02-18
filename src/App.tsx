import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Form";
import Browse from "./components/Browse";
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

          element: <Browse />,
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
