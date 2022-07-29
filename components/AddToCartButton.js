import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { addToCart } from "../store/actions/products";
import { useSelector, useDispatch } from "react-redux";
import { GREEN, LIGHTGRAY } from "../constants";
const AddToCartButton = ({ productId }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) =>
    state.products.cart.find((element) => element.productId == productId)
  );

  const isInCart = cart || false;

  return (
    <TouchableOpacity
      onPress={() => {
        if (!isInCart) {
          dispatch(addToCart(productId, 1));
        } else {
        }
      }}
      style={{
        ...styles.backButton,
        backgroundColor: isInCart ? GREEN : LIGHTGRAY,
      }}
    >
      <AntDesign
        name="shoppingcart"
        size={28}
        color={!isInCart ? GREEN : LIGHTGRAY}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    height: 45,
    width: 45,
    backgroundColor: LIGHTGRAY,
    borderRadius: 15,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});

export default AddToCartButton;
