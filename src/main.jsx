import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AboutUs from "../src/pages/AboutUs.jsx";
import ContactUs from "../src/pages/ContactUs.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import SignIn from "./pages/SignIn.jsx";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/contactus", element: <ContactUs /> },
    // { path: "/signin", element: <SignIn /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
