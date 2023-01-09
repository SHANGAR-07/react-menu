import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Navbar from "./Components/Navbar";
import About from "./Pages/about/About";
import ContactUs from "./Pages/Contactus/Contactus";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import Signup from "./Pages/SignUp/Signup";

const root = ReactDOM.createRoot(
  document.getElementById("root")
)
root.render(
  <BrowserRouter>
  <Navbar/>     
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    
    </Routes>   

  <App/>
  
   </BrowserRouter>
);