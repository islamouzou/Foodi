import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { GREEN } from "../constants";
const SearchBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#E7EEF7", "#F2F8FD", "#F2F8FD"]}
        style={styles.searchBar}
      >
        <View style={styles.searchIconContainer}>
          <Ionicons name={"search"} size={27} color={GREEN} />
        </View>
        <View style={styles.textInpuContainer}>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={styles.filterButtonContainer}>
          <TouchableOpacity style={styles.shopButton}>
            <MaterialCommunityIcons
              name="tune-vertical-variant"
              size={24}
              color="#BECFDB"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  searchBar: {
    width: "75%",
    height: 60,
    backgroundColor: "#F2F8FD",
    elevation: 3,
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  searchIconContainer: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInpuContainer: {
    width: "65%",
    justifyContent: "center",
    alignItems: "flex-start",

    paddingHorizontal: 5,
  },
  filterButtonContainer: {
    flexGrow: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  shopButton: {
    height: 45,
    width: 45,
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

  textInput: {
    flex: 1,
  },
});

export default SearchBar;
