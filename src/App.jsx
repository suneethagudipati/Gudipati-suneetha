
import { BrowserRouter, Link, Route, Routes,  } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Veg from "./Veg";
import "./App.css"
import { useSelector } from "react-redux";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App()
{
  const cart=useSelector((state)=>state.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);

  return(
    <>
    <GoogleOAuthProvider clientId="199389549653-pganqg80j4ea03tatgd8mufrdea9nbha.apps.googleusercontent.com">
      <GoogleLoginComponent />
    </GoogleOAuthProvider>
    {/* <Home />
    <Veg />
    <NonVeg />
    <Cart />
    <PurchaseHistory />
    <AboutUs />
    <ContactUs /> */}
   
    <BrowserRouter >
    <Link to="/">My-Shop</Link>
    <Link to="/veg">Veg</Link>
    <Link to="/nonveg">Non-Veg</Link>
    <Link to="/cart">Cart({totalItems})</Link>
    <Link to="/purchasehistory">Purchase-History</Link>
    <Link to="/aboutus">AboutUs</Link>
    <Link to="/contactus">ContactUs</Link>
    
    <Routes >
    <Route path="/" element={<Home/>} />
    <Route path="/veg" element={<Veg/>} />
    <Route path="/nonveg" element={<NonVeg/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/purchasehistory" element={<PurchaseHistory/>} />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path="/contactus" element={<ContactUs/>} />







    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App;