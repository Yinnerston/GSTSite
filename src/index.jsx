import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import App from "./App";
import "./styles.css";
import PeoplePage from "./PeoplePage";
import PublicationsPage from "./PublicationsPage";
import UsefulLinksPage from "./UsefulLinksPage";
import EventsPage from "./EventsPage";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/People",
        element: <PeoplePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/Publications",
        element: <PublicationsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/Useful-links",
        element: <UsefulLinksPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/Events",
        element: <EventsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/Contact",
        element: <ContactPage />,
        errorElement: <ErrorPage />
    },
])
const root = createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>);
