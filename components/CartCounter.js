import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/actions/products";

import { LIGHTGRAY, GREEN , GRAY } from "../constants";

const CartCounter = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.cart.find((product) => product.productId == productId)
  );

  const cart = useSelector((state) => state.products.cart);

  const quantity = product ? product.quantity : 0;

  //console.log(cart);

  const increaseValue = () => {
    //console.log("dazdazd");
    dispatch(addToCart(productId, quantity + 1));
  };

  const decreaseValue = () => {
    if (quantity > 0) dispatch(addToCart(productId, quantity - 1));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decreaseValue} style={styles.increaseButton}>
        <AntDesign name="minus" size={24} color={GRAY} />
      </TouchableOpacity>

      <Text style={{ marginHorizontal: 10, fontWeight: "500", fontSize: 13 }}>
        {quantity}
      </Text>

      <TouchableOpacity onPress={increaseValue} style={styles.decreaseButton}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  increaseButton: {
    height: 40,
    width: 40,
    backgroundColor: LIGHTGRAY,
    borderRadius: 15,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  decreaseButton: {
    height: 40,
    width: 40,
    backgroundColor: GREEN,
    borderRadius: 15,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CartCounter;
