import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <h2>Subscribe to Our Newsletter</h2>

      <p>
        Get the latest beauty tips, exclusive offers, and new product updates.
      </p>

      <form className="newsletter-form">

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button type="submit">
          Subscribe
        </button>

      </form>

    </section>
  );
}

export default Newsletter;