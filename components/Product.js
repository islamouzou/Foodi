import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AddToCartButton from "./AddToCartButton";
const Product = ({ name, price, photo, id }) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#E7EEF7", "#F2F8FD", "#F2F8FD"]}
      style={styles.container}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductDetail", {
            productId: id,
          });
        }}
        style={styles.container1}
      >
        <Image resizeMode="contain" style={styles.image} source={photo}></Image>
        <View style={styles.infoContainer}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.priceStyle}>£ {price}</Text>
        </View>
      </TouchableOpacity>
      <AddToCartButton productId={id} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: 160,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    elevation: 10,
    margin: 10,
  },

  container1: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "65%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "transparent",
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: "600",
  },

  priceStyle: {
    fontSize: 15,
    color: "black",
    fontWeight: "600",
  },

  infoContainer: {
    flexGrow: 1,
    width: "100%",
    padding: 8,
    justifyContent: "space-between",
  },
});

export default Product;
