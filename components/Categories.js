import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Category from "../components/Category";

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}
        horizontal
      >
        <Category selected title="All" style={styles.title} />
        <Category title="Outdoor" style={styles.title} />
        <Category title="Indoor" style={styles.title} />

        <Category title="Big plants" style={styles.title} />

        <Category title="Little plants" style={styles.title} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },

  scrollViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Categories;
