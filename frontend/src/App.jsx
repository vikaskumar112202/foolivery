import Homepage from "./pages/homepage/Homepage";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/Login/Login"
import Signup from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Global/Navbar/Navbar";
import Footer from "./Components/Global/Footer/Footer";


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;