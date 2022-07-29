import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { GREEN, GRAY } from "../constants";

const Category = ({ title, selected }) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          ...styles.title,
          textDecorationLine: selected ? "underline" : "none",
          color: selected ? GREEN : GRAY,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: GRAY,
    marginHorizontal: 10,
  },
});

export default Category;
