import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Maincomp from './components/MainPage';
import AboutUs from './components/AboutUs';
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
// import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
