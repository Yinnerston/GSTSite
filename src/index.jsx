import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import ErrorPage from "./errorPage";
import App from "./App";
import "./styles.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    }
])
const root = createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>);
