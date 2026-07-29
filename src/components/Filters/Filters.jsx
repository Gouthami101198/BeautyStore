import "./Filters.css";

function Filters({
  category,
  setCategory,
  brand,
  setBrand,
  price,
  setPrice,
  rating,
  setRating,
}) {
  return (
    <aside className="filters">

      <h2>Filters</h2>

      {/* Category */}

      <div className="filter-group">

        <label>Category</label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Skincare">Skincare</option>
          <option value="Makeup">Makeup</option>
          <option value="Haircare">Haircare</option>
          <option value="Fragrance">Fragrance</option>
          <option value="BodyCare">BodyCare</option>
        </select>

      </div>

      {/* Brand */}

      <div className="filter-group">

        <label>Brand</label>

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">All Brands</option>
           <option value="GlowCare">GlowCare</option>
           <option value="BeautyGlow">BeautyGlow</option>
           <option value="NatureCare">NatureCare</option>
           <option value="Elegance">Elegance</option>
           <option value="SkinShield">SkinShield</option> 


          
        </select>

      </div>

      {/* Price */}

      <div className="filter-group">

        <label>Maximum Price</label>

        <input
          type="range"
          min="10"
          max="200"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <span>${price}</span>

      </div>

      {/* Rating */}

      <div className="filter-group">

        <label>Minimum Rating</label>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="0">All Ratings</option>
          <option value="5">5 ★</option>
          <option value="4">4 ★ & Above</option>
          <option value="3">3 ★ & Above</option>
        </select>

      </div>

    </aside>
  );
}

export default Filters;