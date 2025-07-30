import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ IMPORT
import Home from "./pages/Home"; // ✅ IMPORT
import Navbar from "./components/Navbar"; // correct path

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
