import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Checkout from "./pages/Checkout/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import BeautyQuiz from "./pages/BeautyQuiz/BeautyQuiz";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";


function App() {
  return (
    <Routes>

      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />

      {/* Shopping */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="/order-confirmation"
        element={<OrderConfirmation />}
      />

      {/* Beauty Quiz */}
      <Route
        path="/beauty-quiz"
        element={<BeautyQuiz />}
      />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      

    </Routes>
  );
}

export default App;