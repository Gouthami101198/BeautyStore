import "./Categories.css";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Skincare",
    image: "/images/categories/skincare.jpg",
  },
  {
    id: 2,
    name: "Makeup",
    image: "/images/categories/makeup.jpg",
  },
  {
    id: 3,
    name: "Haircare",
    image: "/images/categories/haircare.jpg",
  },
  {
    id: 4,
    name: "Fragrances",
    image: "/images/categories/fragrance.jpg",
  },
  {
    id: 5,
    name: "Body Care",
    image: "/images/categories/bodycare.jpg",
  },

];

function Categories() {
  return (
    <section className="categories">

      <div className="categories-heading">

        <h2>Shop By Category</h2>

        <p>
          Find your favorite beauty essentials from our premium collections.
        </p>

      </div>

      <div className="categories-grid">

        {categories.map((category) => (
          <Link
            to="/products"
            className="category-card"
            key={category.id}
          >
            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-overlay">
              <h3>{category.name}</h3>
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default Categories;