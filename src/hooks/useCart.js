import { useContext } from "react";
import { useCart as useCartContext } from "../context/CartContext";

function useCart() {
  return useCartContext();
}

export default useCart;