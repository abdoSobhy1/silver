import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import Visas from "./routes/Visas.jsx";
import Tickets from "./routes/Tickets.jsx";
import Tours from "./routes/Tours.jsx";
import CarRental from "./routes/CarRental.jsx";
import Contact from "./routes/Contact.jsx";
import CarsPage from "./routes/CarsPage.jsx";
import TicketsPage from "./routes/TicketsPage.jsx";
import ToursPage from "./routes/ToursPage.jsx";
import "./index.css";
import DashBoard from "./Components/Dashboard/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/visas",
        element: <Visas />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/tours",
        element: <Tours />,
      },
      {
        path: "/car-rental",
        element: <CarRental />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/car-rental/:postId",
        element: <CarsPage />,
      },
      {
        path: "/tickets/:postId",
        element: <TicketsPage />,
      },
      {
        path: "/tours/:postId",
        element: <ToursPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
