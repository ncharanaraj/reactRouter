import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Category from "./components/Category";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Address from "./components/Address";
import Login from "./components/Login";
import AuthProvider from "./context/AuthContext";
import RequiresAuth from "./components/RequiresAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/product/:productID",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: (
          <RequiresAuth>
            <Checkout />
          </RequiresAuth>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/address",
        element: (
          <RequiresAuth>
            <Address />
          </RequiresAuth>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
