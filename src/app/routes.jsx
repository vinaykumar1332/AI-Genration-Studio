import { createBrowserRouter } from "react-router";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Studio } from "./pages/Studio";
import { Results } from "./pages/Results";

export const router = createBrowserRouter([
  {
    path: "/",
    Component,
  },
  {
    path: "/login",
    Component,
  },
  {
    path: "/signup",
    Component,
  },
  {
    path: "/studio",
    Component,
  },
  {
    path: "/results",
    Component,
  },
]);
