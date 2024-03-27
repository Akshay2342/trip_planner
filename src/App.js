import Main from "./Pages/Main";
import './App.css';
import LandingPage from "./Pages/landing-page";
import Login from "./Pages/Login";
import Form from "./Pages/Form";
import { useState } from "react";
import TripPlannerForm from "./Pages/Form";
import { Routes, Route } from "react-router-dom";
import ModernLoginPage from "./Pages/CssAuth/NewAuth";
import SavedMap from "./Pages/SavedMap";
import { useContext } from "react";
import { UserContext } from "./components/authContext";
import { useEffect } from "react";
import TripsData from "./Pages/listSavedTrip";

const App = () => {
  const [user, setUser] = useState({name : "ajsh"});
  // const [user, setUser] = useState({name : "ajsh"});

  return (
    <div>
    <UserContext.Provider value={{ user, setUser}}> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/form" element={<Form />} /> */}
        <Route path="/map" element={<Main formData/>} />
        <Route path="/form" element={<TripPlannerForm  />} />
        <Route path="/login" element={<ModernLoginPage/>} />
        <Route path="/newPage" element={<SavedMap/>} />
        <Route path="/saved-trips" element={<TripsData />} />
        <Route path="/newPage" element={<SavedMap/>} />
      </Routes>
    </UserContext.Provider>
    </div>
  );
}

export default App;