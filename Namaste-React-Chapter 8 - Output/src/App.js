import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "",                //  localhost:1234 = No outlet, Only Header & Footer will be displayed.
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",            // localhost:1234 = With outlet Body component will be rendered inside header and footer.
        element: <Body />,
      },
      {
        path: "about",        // localhost:1234/about = With outlet About component will be rendered inside header and footer.
        element: <About />,
        children: [
          {
            path: "profile",  // localhost:1234/about/profile = With outlet Profile component will be rendered inside header and footer.
            element: <Profile />, 
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
