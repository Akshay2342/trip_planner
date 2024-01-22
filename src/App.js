import Main from "./Pages/Main";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return ( 
    <Routes>
        <Route path="Main" element={<Main/>}/>
    </Routes>
   );
}
 
export default App;