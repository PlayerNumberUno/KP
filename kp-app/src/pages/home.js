import { Route, Routes } from "react-router-dom";

import Navbar from "../component/navbar";
import Home from "./home";
import Login from "./login";

const Mainpage = () => {
  return (
    <div className="max-w-screen flex-row sm:flex max-h-screen">
      <Navbar />
      <div className="sm:overflow-y-scroll w-screen relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default Mainpage;