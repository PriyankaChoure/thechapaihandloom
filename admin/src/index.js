import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { LoginPage } from "./routes/LoginPage";
import { HomePage } from "./routes/HomePage";
import { ProductPage } from "./routes/ProductPage";
import { CreateProductComponent } from "./components/Product/CreateProduct/CreateProductComponent";
import { ProductListComponent } from "./components/Product/ShowProducts/ProductListComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
        children: [
          {
            path: "",
            element: <ProductListComponent />,
          },
          {
            path: "/products/create",
            element: <CreateProductComponent />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
