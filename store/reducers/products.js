import { ADD_TO_CART, APPLY_DISCOUNT } from "../actions/products";
import { products } from "../../products";
import { offers } from "../../offers";
const initialState = {
  products: products,
  cart: [],
};

const applyOffer = (cart) => {
  cart.forEach((item, index, array) => {
    offers.forEach((offer, index, array) => {
      if (item.productId === offer.productId) {
        const x =
          cart.find(
            (element) => element.productId == offer.destinationProduct
          ) || null;

        const index = cart.indexOf(x);

        const rule =
          offer.productId === x.productId
            ? offer.rule + (offer.requiredQty - offer.rule)
            : offer.rule;

        if (x && item.quantity >= rule) {
          const discountMultiplier = parseInt(item.quantity / rule);

          const discount =
            x.quantity <= discountMultiplier
              ? (x.quantity * products[x.productId].price * offer.reduction) /
                100
              : (discountMultiplier *
                  products[x.productId].price *
                  offer.reduction) /
                100;

          cart[index].discount = discount;
        }
      }
    });
  });

  return cart;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      var duplicate = false;
      const setDuplicate = (val) => {
        duplicate = val;
      };
      state.cart.forEach((prev) => {
        if (prev.productId === action.data.productId) {
          setDuplicate(true);
        }
      });

      if (duplicate) {
        let cartClone = state.cart.map((prev) => {
          if (prev.productId === action.data.productId) {
            const a = {
              ...prev,
              quantity: action.data.quantity,
              total:
                state.products[action.data.productId].price *
                action.data.quantity,
            };
            return a;
          } else {
            return prev;
          }
        });
        return {
          ...state,
          cart: applyOffer(cartClone),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.data,
              total: state.products[action.data.productId].price,
              discount: 0,
            },
          ],
        };
      }
  }

  return state;
};
