import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Lobby from "./components/Lobby.jsx";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const {currentUser} = AuthProvider


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: "/lobby",
        element: <Lobby />,
      },
      {
        path:'/about',
        element: <About />,
      },
      {
        path:'/contact',
        element: <Contact />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DataProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </DataProvider>
  </AuthProvider>
);
