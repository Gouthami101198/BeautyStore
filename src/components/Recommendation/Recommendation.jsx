import "./Recommendation.css";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";

function Recommendation() {
  // Show first 4 products
  const recommendations = products.slice(0, 2);

  return (
    <section className="recommendation">
      <h2>Recommended For You</h2>

      <div className="recommend-grid">
        {recommendations.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Recommendation;
