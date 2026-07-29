import "./QuantitySelector.css";
import { FaMinus, FaPlus } from "react-icons/fa";

function QuantitySelector({ quantity, setQuantity }) {
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="quantity-selector">

      <button onClick={decreaseQuantity}>
        <FaMinus />
      </button>

      <span>{quantity}</span>

      <button onClick={increaseQuantity}>
        <FaPlus />
      </button>

    </div>
  );
}

export default QuantitySelector;