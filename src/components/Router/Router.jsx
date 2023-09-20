import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main_Layout/MainLayout";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Products from "../Products/Products";
import ProductDetails from "../ProductDetails/ProductDetails";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Dashboard/Profile";
import Settings from "../Dashboard/Settings";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        loader: () => fetch("https://dummyjson.com/products"),
        element: <Products></Products>,
      },
      {
        path: "/product/:productId",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.productId}`),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/",
            element: <Profile></Profile>,
          },
          {
            path: "/dashboard/settings",
            element: <Settings></Settings>,
          },
        ],
      },
    ],
  },
]);

export default route;
