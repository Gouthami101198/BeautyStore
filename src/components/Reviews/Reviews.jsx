import "./Reviews.css";
import Rating from "../Rating/Rating";

const reviews = [
  {
    id: 1,
    name: "Emma Johnson",
    image: "/images/users/user1.jpg",
    rating: 5,
    comment:
      "Absolutely love this serum! My skin feels soft, hydrated, and glowing after just a few days.",
  },
  {
    id: 2,
    name: "Sophia Brown",
    image: "/images/users/user2.jpg",
    rating: 4.5,
    comment:
      "The product quality is amazing, and the delivery was very fast. Highly recommended!",
  },
  {
    id: 3,
    name: "Olivia Smith",
    image: "/images/users/user3.jpg",
    rating: 5,
    comment:
      "This moisturizer is perfect for my dry skin. I'll definitely buy it again.",
  },
];

function Reviews() {
  return (
    <section className="reviews">

      <h2>Customer Reviews</h2>

      <div className="reviews-container">

        {reviews.map((review) => (
          <div className="review-card" key={review.id}>

            <img
              src={review.image}
              alt={review.name}
            />

            <h3>{review.name}</h3>

            <Rating rating={review.rating} />

            <p>{review.comment}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Reviews;