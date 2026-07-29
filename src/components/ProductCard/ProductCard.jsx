import "./ProductCard.css";
import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import WishlistButton from "../WishlistButton/WishlistButton";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
          />
        </Link>

        {product.discount > 0 && (
          <span className="product-discount">
            -{product.discount}%
          </span>
        )}

        {/* Wishlist */}
        <WishlistButton product={product} />
      </div>

      <div className="product-content">
        <p className="product-brand">
          {product.brand}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <div className="product-rating">
          <FaStar />
          <span>{product.rating}</span>
        </div>

        
          <span className="old-price">
            ${product.oldPrice}
          </span>
        </div>
        
        <div className="product-price">
          <span className="current-price">
            ${product.price}
          </span>


        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;