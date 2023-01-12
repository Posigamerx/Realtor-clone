import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="Offers" element={<Offers/>}/>

      </Routes>
    </Router>




    </>
      
   
  );
}

export default App;
