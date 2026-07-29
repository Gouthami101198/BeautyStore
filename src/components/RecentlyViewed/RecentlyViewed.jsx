import "./RecentlyViewed.css";

const products = [
  {
    id: 1,
    name: "Vitamin C Serum",
    image: "/images/products/serum.jpg",
    price: "$29.99",
  },
  {
    id: 2,
    name: "Face Moisturizer",
    image: "/images/products/moisturizer.jpg",
    price: "$34.99",
  },
  {
    id: 3,
    name: "Lipstick",
    image: "/images/products/lipstick.jpg",
    price: "$18.99",
  },
];

function RecentlyViewed() {
  return (
    <section className="recently-viewed">

      <h2>Recently Viewed</h2>

      <div className="recent-grid">

        {products.map((product) => (
          <div className="recent-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default RecentlyViewed;