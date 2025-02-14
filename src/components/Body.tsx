import React from "react";
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
    <div
      className="h-screen w-screen relative overflow-x-hidden bg-gradient-to-bl from-black bg-black"
      // style={{
      //   backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg")`,
      // }}
    >
      <img
        className="w-screen max-h-screen bg-center bg-cover bg-blend-multiply bg-black"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
        alt="image"
      />
      {/* <Login />
      <Browse /> */}
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
