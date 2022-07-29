export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (productId, quantity) => {
  return {
    type: ADD_TO_CART,
    data: {
      productId,
      quantity,
    },
  };
};

