import Main from "./Pages/Main";
import './App.css';
import LandingPage from "./Pages/landing-page";
import Login from "./Pages/Login";
import Form from "./Pages/Form";
import { useState } from "react";
import TripPlannerForm from "./Pages/Form";
import {Auth}  from "./components/auth"
import { Routes, Route } from "react-router-dom";
import ModernLoginPage from "./Pages/NewAuth";

const App = () => {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/form" element={<Form />} />
        <Route path="/map" element={<Main/>} />
        <Route path="/form" element={<TripPlannerForm/>} />
        <Route path="/login" element={<ModernLoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;