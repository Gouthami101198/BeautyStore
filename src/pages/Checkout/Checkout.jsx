import "./Checkout.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartContext";

function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    payment: "Cash on Delivery",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode
    ) {
      alert("Please fill all fields.");
      return;
    }

    clearCart();
    navigate("/order-confirmation");
  };

  return (
    <>
      <Navbar />

      <section className="checkout-page">

        <h1>Checkout</h1>

        <div className="checkout-container">

          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >

            <h2>Shipping Details</h2>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
            ></textarea>

            <div className="row">

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />

            </div>

            <input
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={handleChange}
            />

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option>Cash on Delivery</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>UPI</option>
              <option>Net Banking</option>
            </select>

            <button type="submit">
              Place Order
            </button>

          </form>

          <div className="order-summary">

            <h2>Order Summary</h2>

            {cart.map((item) => (
              <div
                className="summary-item"
                key={item.id}
              >
                <span>
                  {item.name} × {item.quantity || 1}
                </span>

                <span>
                  $
                  {(
                    item.price * (item.quantity || 1)
                  ).toFixed(2)}
                </span>
              </div>
            ))}

            <hr />

            <div className="summary-total">

              <h3>Total</h3>

              <h3>${total.toFixed(2)}</h3>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Checkout;