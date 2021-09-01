export const calculateSubtotal = (products) => {
  const subtotal = products.reduce((acum, product) => {
    return acum + product.price * product.quantity;
  }, 0);
  return subtotal;
};

export const calculateTotal = (subtotal, taxes) => {
  const total = taxes.reduce((accum, tax) => {
    return accum + subtotal * tax;
  }, 0);
  return total;
};

export const moneyFormatter = (number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(number);
};