import "./FeaturedProducts.css";

import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts() {
  // Display the first 4 products as featured
  const featuredProducts = products.slice(0, 15);

  return (
    <section className="featured-products">

      <div className="section-heading">

        <h2>Featured Products</h2>

        <p>Explore our most loved beauty essentials.</p>

      </div>

      <div className="featured-grid">

        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;