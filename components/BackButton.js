import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { GRAY , LIGHTGRAY } from "../constants";
const BackButton = ({ marginTop }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack(0);
      }}
      style={{ ...styles.backButton, marginTop: marginTop ? marginTop : 0 }}
    >
      <AntDesign name="left" size={20} color={GRAY} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    height: 45,
    width: 45,
    backgroundColor: LIGHTGRAY,
    borderRadius: 15,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 10,
  },
});

export default BackButton;
