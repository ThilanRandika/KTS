import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage";
import RoadRoutes from "./pages/routes";
import Journey from "./pages/journey";
import Booking from "./pages/booking";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Login from "./pages/loginpage";

const user = "sds";

const ProtectedRoute = ({ children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  return (
    <div className="app flex flex-col overflow-y-scroll min-h-screen">
      <div className={!user ? "hidden" : ""}>
        <Navbar />
      </div>
      <div className="w-full h-full flex-1  ">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/routes" element={<RoadRoutes />} />
          <Route path="journey/" element={<Journey />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div className={!user ? "hidden" : "mt-auto"}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
