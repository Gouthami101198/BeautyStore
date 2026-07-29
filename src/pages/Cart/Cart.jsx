import "./Cart.css";

import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import EmptyState from "../../components/EmptyState/EmptyState";

import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      <Navbar />

      <section className="cart-page">

        <div className="cart-header">

          <h1>Shopping Cart</h1>

          <p>{cart.length} Item(s)</p>

        </div>

        {cart.length === 0 ? (
          <EmptyState
            title="Your Cart is Empty"
            message="Looks like you haven't added any beauty products yet."
          />
        ) : (
          <div className="cart-container">

            <div className="cart-items">

              {cart.map((item) => (
                <div className="cart-item" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-info">

                    <h3>{item.name}</h3>

                    <p>${item.price.toFixed(2)}</p>

                  </div>

                  <QuantitySelector
                    quantity={item.quantity || 1}
                    setQuantity={() => {}}
                  />

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>
              ))}

            </div>

            <div className="cart-summary">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="summary-row">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <Link
                to="/checkout"
                className="checkout-btn"
              >
                Proceed to Checkout
              </Link>

            </div>

          </div>
        )}

      </section>

      <Footer />
    </>
  );
}

export default Cart;