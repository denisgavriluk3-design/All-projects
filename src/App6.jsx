import React from "react";
import Header from "./assets/App6/header";
import Footer from "./assets/App6/footer";
import HomePage from "./assets/App6/HomePage";
import Sign_Up from "./assets/App6/Sign_Up";
import Log_In from "./assets/App6/Log_In";
import Wishlist from "./assets/App6/Wishlist";
import Cart from "./assets/App6/Cart";
import CheckOut from "./assets/App6/CheckOut";
import Account from "./assets/App6/Account";
import About from "./assets/App6/About";
import Contact from "./assets/App6/Contact";
import Error from "./assets/App6/Error";
import Product_Details_page from "./assets/App6/Product Details page";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HeaderAndFooter from "./assets/App6/HeaderAndFooter";
import gamePade from "./img/gamepad.png"

function App6() {
const products = [
  {id:1, name:"HAVIT HV-G92 Gamepad", price:120, oldPrice:160, image:gamePade}
]



  return (
    <div>
      {/* <Product_Details_page/> */}
      {/* <Error/> <p>Home</p>
          <p>/</p>
          <p>404 Error</p>*/}
      {/* <Contact/> <p>Home</p>
          <p>/</p>
          <p>Cantact</p>*/}
      {/* <About/> <p>Home</p>
          <p>/</p>
          <p>About</p>*/}
      {/* <Account/> <p>Home</p>
            <p>/</p>
            <p>My Account</p>*/}
      {/* <CheckOut/><p>Account</p>
                <p>/</p>
                <p>My Account</p>
                <p>/</p>
                <p>Product</p>
                <p>/</p>
                <p>View Cart</p>
                <p>/</p>
                <p>CheckOut</p> */}
      {/* <Cart/> <p>Home</p>
                <p>/</p>
                <p>Cart</p> */}
      {/* <Wishlist/> */}
      {/* <Log_In/> */}
      {/* <Sign_Up/> */}
      {/* <HomePage/> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HeaderAndFooter />}>
          <Route index element={<HomePage />} />
          <Route path="/Sign_Up" element={<Sign_Up />} />
          <Route path="/Log_In" element={<Log_In />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/About" element={<About />} />
          <Route path="/About-us" element={<Navigate to="/about" replace/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/Product_Details_page" element={<Product_Details_page />}/>
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App6;
