import "./ProductDetails.css";

import { useParams } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "../../components/Rating/Rating";
import Reviews from "../../components/Reviews/Reviews";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import ShadeSelector from "../../components/ShadeSelector/ShadeSelector";
import WishlistButton from "../../components/WishlistButton/WishlistButton";
import RecentlyViewed from "../../components/RecentlyViewed/RecentlyViewed";
import Recommendation from "../../components/Recommendation/Recommendation";

import { useCart } from "../../context/CartContext";
import products from "../../data/products";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />

        <section className="product-not-found">
          <h2>Product Not Found</h2>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="product-details">

        <div className="product-container">

          {/* Left */}

          <div className="product-left">

            <ProductGallery
              images={product.gallery || [product.image]}
            />

            <div className="zoom-section">
              <ProductZoom
                image={product.gallery?.[0] || product.image}
              />
            </div>

          </div>

          {/* Right */}

          <div className="product-right">

            <h1>{product.name}</h1>

            <p className="brand">
              {product.brand}
            </p>

            <Rating rating={product.rating} />

            <div className="price">

              <span className="old">
                ${product.oldPrice}
              </span>

              <span className="current">
                ${product.price}
              </span>

            </div>

            <p className="description">
              {product.description}
            </p>

            {/* Show Shade Selector only for Makeup */}

            {product.category === "Makeup" && (
              <ShadeSelector
                shades={[
                  "#d98b6b",
                  "#c76f46",
                  "#f3b6b8",
                  "#b85b4b",
                  "#7b3f2d",
                ]}
              />
            )}

            <QuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
            />

            <div className="action-buttons">

              <button
                className="cart-btn"
                onClick={() =>
                  addToCart({
                    ...product,
                    quantity,
                  })
                }
              >
                Add to Cart
              </button>

              <WishlistButton product={product} />

            </div>

          </div>

        </div>

        <Reviews />

        <Recommendation />

        <RecentlyViewed />

      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;