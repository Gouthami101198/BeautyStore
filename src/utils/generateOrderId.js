function generateOrderId() {
  return (
    "BG-" +
    Date.now().toString().slice(-8)
  );
}

export default generateOrderId;