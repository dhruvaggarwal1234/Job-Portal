
import { Routes,Route } from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";


function App(){

return(
  
  <Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  </Routes>
);

}
export default App;

