import "./Navbar.css";

import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">BeautyStore</Link>
      </div>

      {/* Navigation */}
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/beauty-quiz">Beauty Quiz</Link>
        
        
      </nav>

      {/* Right Side */}
      <div className="navbar-right">

        {/* Search */}
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search products..."
          />
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Wishlist */}
        <Link
          to="/wishlist"
          className="icon-btn"
        >
          <FaHeart />
          {wishlist.length > 0 && (
            <span className="count">
              {wishlist.length}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="icon-btn"
        >
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className="count">
              {cart.length}
            </span>
          )}
        </Link>

        {/* profile*/}
        <Link
          to="/login"
          className="icon-btn"
        >
          <FaUser />
        </Link>

      </div>
    </header>
  );
}

export default Navbar;