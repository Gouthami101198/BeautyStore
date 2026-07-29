import "./Wishlist.css";

import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import EmptyState from "../../components/EmptyState/EmptyState";

import { useWishlist } from "../../context/WishlistContext";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <>
      <Navbar />

      <section className="wishlist-page">

        <div className="wishlist-header">

          <h1>My Wishlist</h1>

          <p>{wishlist.length} Item(s)</p>

        </div>

        {wishlist.length === 0 ? (
          <EmptyState
            title="Your Wishlist is Empty"
            message="Save your favorite beauty products to your wishlist."
          />
        ) : (
          <>
            <div className="wishlist-grid">

              {wishlist.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

            <div className="wishlist-actions">

              <Link
                to="/products"
                className="continue-btn"
              >
                Continue Shopping
              </Link>

            </div>
          </>
        )}

      </section>

      <Footer />
    </>
  );
}

export default Wishlist;