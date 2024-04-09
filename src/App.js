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
import Cardd from "./components/Map/Cardd";
import TripsData from "./Pages/listSavedTrip";
import DrawerFilters from "./components/Drawer/drawer";
import IndexRunfood from "./Helpers/indexRun";
import BackTest from "./Helpers/backTest";
import Chatbot from "./Pages/chatbot";

const App = () => {
  const [user, setUser] = useState({name : "ajsh"});
  // const [user, setUser] = useState({name : "ajsh"});

  return (
    <div>
    <UserContext.Provider value={{ user, setUser}}> 
      <Routes>
        <Route path="/bt" element={<BackTest />} />
        {/* <Route path="/form" element={<Form />} /> */}
        {/* <Route path="/form" element={<Form />} /> */}
        <Route path="/map" element={<Main formData/>} />
        <Route path="/form" element={<TripPlannerForm  />} />
        <Route path="/login" element={<ModernLoginPage/>} />
        <Route path="/newPage" element={<SavedMap/>} />
        <Route path="/saved-trips" element={<TripsData />} />
        <Route path="/cards" element={<Cardd />} />
        <Route path="/draw" element={<DrawerFilters />} />
        <Route path="/newPage" element={<SavedMap/>} />
        <Route path="/IndexRun" element={<IndexRunfood/>} />
        <Route path="/ChatBot" element={<Chatbot/>} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </UserContext.Provider>
    </div>
  );
}

export default App;