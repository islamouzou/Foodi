import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Badge } from "react-native-elements";
import { useSelector } from "react-redux";
import { GREEN, GRAY } from "../constants";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ title }) => {
  const cart = useSelector((state) => state.products.cart);
  const numberOfItems = cart ? cart.length : 0;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cart");
        }}
        style={styles.shopButton}
      >
        <Ionicons name={"basket-outline"} size={27} color={GRAY} />
        {numberOfItems !== 0 && (
          <Badge
            textStyle={{
              color: "white",
              fontSize: 9,
            }}
            value={numberOfItems}
            badgeStyle={{
              width: 18,
              height: 18,
              borderRadius: 100,
              backgroundColor: GREEN,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 3,
            }}
            containerStyle={{
              position: "absolute",
              top: 25,
              left: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },

  shopButton: {
    height: 45,
    width: 45,
    position: "absolute",
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFF6FC",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

export default CustomHeader;
