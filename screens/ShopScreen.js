import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Categories from "../components/Categories";
import CustomHeader from "../components/CustomHeader";
import Find from "../components/Find";
import Product from "../components/Product";
import SearchBar from "../components/SearchBar";
import CategoryHeader from "../components/CategoryHeader";
import { products } from "../products";

const renderProduct = ({ item }) => (
  <Product
    name={item.name}
    id={item.id}
    photo={item.photo}
    price={item.price}
  />
);

const ShopScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader title="Foodi" />
      <SearchBar />
      <Categories />

      <View>
        <FlatList
          contentContainerStyle={{ height: 300 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderProduct}
          keyExtractor={(product) => `${product.id}`}
          data={products}
        />
      </View>
      <CategoryHeader title={"Vegies"} />
      <Find></Find>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default ShopScreen;
