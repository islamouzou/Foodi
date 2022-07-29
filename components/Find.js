import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SimpleLineIcons } from "@expo/vector-icons";
import { GREEN } from "../constants";
const Find = () => {
  return (
    <View style={styles.container1}>
      <LinearGradient
        colors={["#E7EEF7", "#F2F8FD", "#F2F8FD"]}
        style={styles.container}
      >
        <View style={styles.container2}>
          <Text style={styles.text}>Find Healthy Vegetables</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <SimpleLineIcons
            style={{ fontWeight: "800" }}
            name="magic-wand"
            size={20}
            allowFontScaling
            color={GREEN}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  container: {
    height: 130,
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
    elevation: 10,
    margin: 10,
    justifyContent: "center",
    padding: 15,
  },

  container2: {
    height: "100%",
    width: "100%",
    backgroundColor: "#EFF4F8",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },

  text: {
    fontSize: 13,
    color: "black",
    fontWeight: "400",
    position: "absolute",
    left: 15,
    top: 25,
  },

  button: {
    height: 60,
    width: 60,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#EEF5FC",
    position: "absolute",
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Find;
