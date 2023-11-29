import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage";
import RoadRoutes from "./pages/routes";
import Journey from "./pages/journey";
import Booking from "./pages/booking";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

function App() {
  return (
    <div className="app flex flex-col overflow-scroll min-h-screen">
      <Navbar />
      <div className="w-full h-full flex-1 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routes" element={<RoadRoutes />} />
          <Route path="journey/" element={<Journey />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
