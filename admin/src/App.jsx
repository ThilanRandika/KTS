import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
function App() {
  return (
    <div className="flex h-screen ">
      <div className="w-[300px] bg-red-100 h-screen">
        <Sidebar />
      </div>
      <div className=" max-h-screen overflow-y-scroll w-full">
        <Navbar />

        <div className=" min-h-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
