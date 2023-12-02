import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import "./app.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./pages/loginpage";
import { useUserContext } from "./hooks/useUserAuthContext";
import AddRoute from "./pages/addRoutes";
import EmployeesPage from "./pages/employees";
function App() {
  const { user } = useUserContext();

  return (
    <div className="flex h-screen ">
      <div className={user ? "w-[300px] bg-red-100 h-screen" : "hidden"}>
        <Sidebar />
      </div>
      <div className=" max-h-screen overflow-y-scroll w-full">
        <div className={user ? "" : "hidden"}>
          <Navbar />
        </div>

        <div className=" min-h-full">
          <Routes>
            <Route
              path="/"
              element={user ? <EmployeesPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/add-routes"
              element={user ? <AddRoute /> : <Navigate to="/login" />}
            />
            <Route
              path="/journey"
              element={user ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/employees"
              element={user ? <EmployeesPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
