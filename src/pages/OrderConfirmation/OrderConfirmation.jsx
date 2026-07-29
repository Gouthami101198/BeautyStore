import "./OrderConfirmation.css";

import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function OrderConfirmation() {
  return (
    <>
      <Navbar />

      <section className="order-confirmation">

        <div className="confirmation-card">

          <FaCheckCircle className="success-icon" />

          <h1>Order Placed Successfully!</h1>

          <p>
            Thank you for shopping with <strong>BeautyGlow</strong>.
          </p>

          <p>
            Your order has been received and is being processed.
            A confirmation email will be sent shortly.
          </p>

          <div className="order-details">

            <div className="detail-row">
              <span>Order ID</span>
              <span>#BG2026001</span>
            </div>

            <div className="detail-row">
              <span>Estimated Delivery</span>
              <span>3 - 5 Business Days</span>
            </div>

            <div className="detail-row">
              <span>Payment Status</span>
              <span className="paid">Paid</span>
            </div>

          </div>

          <div className="confirmation-buttons">

            <Link
              to="/products"
              className="shop-btn"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="home-btn"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default OrderConfirmation;