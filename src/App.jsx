import Login from "./pages/login";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/test2";

const user = JSON.parse(localStorage.getItem("user"));
const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: user ? <Navigate to="/home" replace /> : <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
