import { useContext } from "react";
import { useWishlist as useWishlistContext } from "../context/WishlistContext";

function useWishlist() {
  return useWishlistContext();
}

export default useWishlist;