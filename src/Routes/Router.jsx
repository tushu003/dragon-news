import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

 export const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children:  [
      {
        path: "",
        element:<Home></Home>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        // loader: fetch("../../public/news.json"),
        loader:()=>fetch('/news.json'),
      }
    ]
  },
  {
    path: "/auth",
    element: <div>auth World</div>,
  },
  {
    path: "/news",
    element: <div>news World</div>,
  },
  {
    path: "/*",
    element: <div>Error World</div>,
  },
]);