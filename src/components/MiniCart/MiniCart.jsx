import "./MiniCart.css";
import { FaTimes } from "react-icons/fa";

function MiniCart({ isOpen, setIsOpen }) {
  return (
    <div className={`mini-cart ${isOpen ? "show" : ""}`}>

      <div className="mini-cart-header">

        <h2>Your Cart</h2>

        <button onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>

      </div>

      <div className="mini-cart-body">

        <p>Your cart is empty.</p>

      </div>

      <div className="mini-cart-footer">

        <button>
          Checkout
        </button>

      </div>

    </div>
  );
}

export default MiniCart;