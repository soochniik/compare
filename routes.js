import { createBrowserRouter } from "react-router-dom"
import { StartPage } from "./screens/StartPage";
import { Comparison } from "./screens/Comparison";
import { LogIn } from "./screens/LogIn";
import { History } from "./screens/History";

export const router = createBrowserRouter([
  { path: "/", element: <StartPage /> },
  { path: "/comparison", element: <Comparison /> },
  { path: "/login", element: <LogIn /> },
  { path: "/history", element: <History /> },
])
