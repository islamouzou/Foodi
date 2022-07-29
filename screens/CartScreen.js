import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import { products } from "../products";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const renderProduct = ({ item }) => (
  <CartItem
    name={products[item.productId].name}
    productId={item.productId}
    photo={products[item.productId].photo}
    price={products[item.productId].price}
    quantity={item.quantity}
    discount={item.discount}
  />
);

const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.products.cart);

  const sum = cart.reduce((accumulator, item) => {
    return accumulator + item.total;
  }, 0);

  const discountSum = cart.reduce((accumulator, item) => {
    return accumulator + item.discount;
  }, 0);

  return (
    <View style={styles.container}>
      <Header title="Cart" />

      <FlatList
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20,
          width: "100%",
          padding: 5,
          alignItems: "center",
        }}
        renderItem={renderProduct}
        keyExtractor={(product) => `${product.productId}`}
        data={cart}
      />

      {cart.length > 0 && (
        <View style={styles.totalContainer}>
          <View style={styles.separator}></View>
          <View style={styles.headers}>
            <View style={styles.total}>
              <Text style={styles.headerText}>Subtotal</Text>
              <Text style={styles.valuesText}>
                £{parseFloat(sum).toFixed(2)}
              </Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.headerText}>Discount</Text>
              <Text style={styles.valuesText}>
                £{parseFloat(discountSum).toFixed(2)}
              </Text>
            </View>

            <View style={styles.total}>
              <Text style={styles.headerText}>Total</Text>

              <Text style={styles.valuesText}>
                £{parseFloat(sum - discountSum).toFixed(2)}
              </Text>
            </View>
          </View>

          <View></View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },

  totalContainer: {
    width: "100%",
    height: "40%",
  },

  separator: {
    marginTop: 50,
    width: "80%",
    borderWidth: 0.2,
    backgroundColor: "#E5E5E5",
    borderColor: "#E5E5E5",
    alignSelf: "center",
  },

  headers: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    paddingHorizontal: 20,
  },

  headerText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#515151",
  },

  valuesText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
    marginTop: 15,
  },

  total: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CartScreen;
