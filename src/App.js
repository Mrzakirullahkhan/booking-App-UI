import './App.css';
import React from "react";
import Home from "./pages/home/Home";
import Hotels from "./pages/hotel/Hotel";
import List from './pages/list/list';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotels />} />
      </Routes>
    </Router>
  );
}

export default App;
