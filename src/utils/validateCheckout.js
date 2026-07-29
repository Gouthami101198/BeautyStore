function validateCheckout(data) {
  const errors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  }

  if (!data.address.trim()) {
    errors.address = "Address is required.";
  }

  if (!data.city.trim()) {
    errors.city = "City is required.";
  }

  if (!data.state.trim()) {
    errors.state = "State is required.";
  }

  if (!data.zipCode.trim()) {
    errors.zipCode = "ZIP Code is required.";
  }

  return errors;
}

export default validateCheckout;