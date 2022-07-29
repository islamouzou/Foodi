import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CategoryHeader = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft : 15
  },
});

export default CategoryHeader;
