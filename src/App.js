import Main from "./Pages/Main";
import './App.css';
import LandingPage from "./Pages/landing-page";
import Login from "./Pages/Login";
import Form from "./Pages/Form";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/map" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;