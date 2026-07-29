import "./Products.css";

import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import SkinTypeFilter from "../../components/SkinTypeFilter/SkinTypeFilter";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";

import products from "../../data/products";

const ITEMS_PER_PAGE = 4;

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(1000);
  const [rating, setRating] = useState("");
  const [skinType, setSkinType] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category) &&
      (brand === "" || product.brand === brand) &&
      product.price <= price &&
      (rating === "" || product.rating >= Number(rating)) &&
      (skinType === "" ||
        skinType === "All" ||
        product.skinType === skinType)
    );
  });

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <Navbar />

      <section className="products-page">

        <div className="products-heading">

          <h1>Our Beauty Products</h1>

          <p>
            Discover skincare, makeup, fragrances and more.
          </p>

        </div>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="products-container">

          <aside className="sidebar">

            <Filters
              category={category}
              setCategory={setCategory}
              brand={brand}
              setBrand={setBrand}
              price={price}
              setPrice={setPrice}
              rating={rating}
              setRating={setRating}
            />

            <SkinTypeFilter
              skinType={skinType}
              setSkinType={setSkinType}
            />

          </aside>

          <div className="products-content">

            <div className="products-grid">

              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))
              ) : (
                <h2>No Products Found</h2>
              )}

            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            )}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Products;