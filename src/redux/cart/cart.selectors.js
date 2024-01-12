export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
};

export const selectProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
};
