import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLout from "./components/layout/MainLaout";
import Header from "./components/header";
import Todo from "./pages/Todo";
import WeatherPage from "./pages/weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLout />,
  },
  {
    path: "/todo",
    element: (
      <>
        <Header />
        <Todo />
      </>
    ),
  },

  {
    path: "/weather",
    element: (
      <>
        <Header />
        <WeatherPage   />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);