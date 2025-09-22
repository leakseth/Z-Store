import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import NotFound from "./components/NotFound";
import Mainpage from "./page/Mainpage";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import { CartProvider } from "./components/ShopContext";
import Cart from "./components/Cart";
import OrderComplete from "./page/OrderComplete";
// import CheckoutQR from "./page/CheckoutQR";


function App() {
  return (
    <CartProvider>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/men" element={<Men/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/kids" element={<Kids/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order-complete" element={<OrderComplete/>}/>
          {/* <Route path="/" element={<CheckoutQR/>}/> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
