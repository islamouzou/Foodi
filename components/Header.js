import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import BackButton from "./BackButton";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
        
      <Text style={styles.title}>{title}</Text>
      <EvilIcons name="cart" size={30} color="black" />
      <BackButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      width : '100%',
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default Header;
