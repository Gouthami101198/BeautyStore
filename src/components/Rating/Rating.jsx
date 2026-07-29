import "./Rating.css";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function Rating({ rating }) {
  return (
    <div className="rating">

      {[1, 2, 3, 4, 5].map((star) => {

        if (rating >= star) {
          return <FaStar key={star} className="star filled" />;
        }

        if (rating >= star - 0.5) {
          return <FaStarHalfAlt key={star} className="star filled" />;
        }

        return <FaRegStar key={star} className="star" />;

      })}

      <span className="rating-text">
        ({rating})
      </span>

    </div>
  );
}

export default Rating;