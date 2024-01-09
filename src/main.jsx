import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Lobby from './components/Lobby.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path: '/lobby',
      element: <Lobby />
    }
  ]
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
