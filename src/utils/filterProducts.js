function filterProducts(products, filters) {
  return products.filter((product) => {
    return (
      product.name
        .toLowerCase()
        .includes(filters.search.toLowerCase()) &&
      (filters.category === "" ||
        product.category === filters.category) &&
      (filters.brand === "" ||
        product.brand === filters.brand) &&
      (filters.skinType === "" ||
        product.skinType === filters.skinType) &&
      product.price <= filters.price &&
      (filters.rating === "" ||
        product.rating >= Number(filters.rating))
    );
  });
}

export default filterProducts;