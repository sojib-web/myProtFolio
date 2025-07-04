import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Home/Home";

import About from "../About/About";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/portfolio",
        Component: Project,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
