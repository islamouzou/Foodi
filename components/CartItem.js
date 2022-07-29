import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CartCounter from "../components/CartCounter";
const CartItem = ({ productId, photo, name, quantity, price, discount }) => {
  return (
    <LinearGradient colors={["#E7EEF7", "#ECF2F6"]} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="center" style={styles.image} source={photo}></Image>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.productName}>{name}</Text>

        <CartCounter productId={productId} />
      </View>

      <View style={styles.priceContainer}>
        {discount !== 0 && (
          <Text style={styles.priceBefore}>
            £{parseFloat(discount).toFixed(2)}
          </Text>
        )}

        <View style={styles.priceCircle}>
          <Text style={styles.price}>
            £{parseFloat(quantity * price - discount).toFixed(2)}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 20,
  },

  imageContainer: {
    justifyContent: "flex-start",
    height: "90%",
    width: "35%",
  },

  image: {
    height: "100%",
    width: "100%",
  },

  counterContainer: {
    flexGrow: 1,
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  priceContainer: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  productName: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "500",
    margin: 5,
  },

  priceCircle: {
    height: 50,
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
  },

  priceBefore: {
    textDecorationLine: "line-through",
    color: "#A12A00",
    position: "absolute",
    top: 5,
    fontSize: 11,
    fontWeight: "500",
  },

  price: {
    fontSize: 11,
    color: "#777676",
    fontWeight: "500",
  },
});

export default CartItem;
