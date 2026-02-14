import { createBrowserRouter } from "react-router";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Studio } from "./pages/Studio";
import { Results } from "./pages/Results";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/studio",
    Component: Studio,
  },
  {
    path: "/results",
    Component: Results,
  },
]);
