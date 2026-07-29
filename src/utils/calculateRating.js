function calculateRating(reviews) {
  if (!reviews.length) return 0;

  const total = reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );

  return (total / reviews.length).toFixed(1);
}

export default calculateRating;