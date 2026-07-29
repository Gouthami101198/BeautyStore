function calculateDiscount(oldPrice, newPrice) {
  return Math.round(
    ((oldPrice - newPrice) / oldPrice) * 100
  );
}

export default calculateDiscount;