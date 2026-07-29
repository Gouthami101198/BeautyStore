import "./ProductZoom.css";
import { useState } from "react";

function ProductZoom({ image }) {
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.target.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      className="product-zoom"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setBackgroundPosition("center")}
    >
      <img src={image} alt="Product" />
    </div>
  );
}

export default ProductZoom;