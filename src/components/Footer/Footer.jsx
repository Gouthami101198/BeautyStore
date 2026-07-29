import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div>
          <h2>BeautyGlow</h2>

          <p>
            Premium skincare, makeup, haircare, fragrances, and beauty essentials.
          </p>
        </div>

        <div>

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/wishlist">Wishlist</a>

        </div>

        <div>

          <h3>Support</h3>

          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 BeautyGlow. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;