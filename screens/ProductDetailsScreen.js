import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import CartCounter from "../components/CartCounter";
import BackButton from "../components/BackButton";
import { products } from "../products";

const ProductDetailsScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const product = products[productId];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#E7EEF7", "#ECF2F6", "#D4DFE7"]}
        style={styles.imageBackground}
      >
        <Image
          resizeMode="center"
          style={styles.image}
          source={product.photo}
        ></Image>
      </LinearGradient>

      <View style={styles.textContainer}>
        <View style={styles.titlePriceContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>£{product.price}</Text>
        </View>
        <ScrollView
          style={{ height: 150, paddingHorizontal: 20, marginTop: 20 }}
        >
          <Text
            textBreakStrategy="highQuality"
            style={{ textAlign: "justify", color: "#606060" }}
          >
            {product.description}
          </Text>
        </ScrollView>
        <LinearGradient
          colors={["transparent", "#E7EEF7"]}
          style={{
            position: "absolute",
            bottom: 0,
            height: 100,
            width: "100%",
          }}
        ></LinearGradient>
      </View>

      <View style={styles.buttonsContainer}>
        <CartCounter productId={productId} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
          style={styles.viewCartButton}
        >
          <Text style={{ color: "#616161", marginRight: 10 }}>View Cart</Text>
          <AntDesign name="right" size={20} color="#616161" />
        </TouchableOpacity>
      </View>
      <BackButton marginTop={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },

  imageBackground: {
    height: 320,
    width: "100%",

    borderBottomRightRadius: 190,
    borderBottomLeftRadius: 190,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  textContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  titlePriceContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 22,
    fontWeight: "500",
  },

  price: {
    fontSize: 22,
  },

  viewCartButton: {
    height: 55,
    width: 180,
    backgroundColor: "#EFF4FC",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },

  backButton: {
    height: 45,
    width: 45,
    backgroundColor: "#EFF5FC",
    borderRadius: 15,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 50,
    left: 10,
  },

  image: {
    height: "70%",
  },
});

export default ProductDetailsScreen;
