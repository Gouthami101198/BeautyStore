import "./WishlistButton.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";

function WishlistButton({ product }) {
  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();

  const isInWishlist = wishlist.some(
    (item) => item.id === product.id
  );

  const handleClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      className={`wishlist-btn ${isInWishlist ? "active" : ""}`}
      onClick={handleClick}
    >
      {isInWishlist ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}

export default WishlistButton;