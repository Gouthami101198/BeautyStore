import "./ProductGallery.css";
import { useState } from "react";

function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={selectedImage} alt="Product" />
      </div>

      <div className="thumbnail-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={selectedImage === image ? "active" : ""}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;