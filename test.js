import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GRAY from "./constants";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, Button } from "react-native-elements";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          position: "absolute",
          padding: 5,
          alignSelf: "center",
          backgroundColor: "#fff",
          width: 80,
          height: 80,
          borderRadius: 35,
          bottom: 25,
          zIndex: 5,
          overflow : 'hidden'
        }}
      >
        <Button
          icon={{
            name: "plus",
            type: "feather",
            color: "#fff",
            style: { marginRight: 0 },
          }}
          buttonStyle={{
            backgroundColor: "#24D7BC",
            width: 70,
            height: 70,
            borderRadius: 50,
            
           
          }}
          containerViewStyle={{ alignSelf: "center" , elevation : 5 , backgroundColor  :'white' }}
        />
      </View>
      <LinearGradient
        colors={["#F4F8FC", "#EDF4FB", "#EFF5FC"]}
        style={{
          position: "absolute",
          backgroundColor: "#3F51B5",
          bottom: 0,
          zIndex: 1,
          width: "100%",
          height: 80,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems : 'center',
          paddingHorizontal: 15,
          paddingVertical: 10,
          width: "100%",
          backgroundColor: "#EFF5FC",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          elevation: 5,
        }}
      >
        <Icon name="list" type="feather" color="#DDE4EF" />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Icon
            name="heart"
            type="feather"
            color="#DDE4EF"
            containerStyle={{ marginHorizontal: 10 }}
          />
          <Icon name="search" type="feather" color="#DDE4EF" />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },

  bottomBarContainer: {
    height: 120,
    width: "100%",
    elevation: 5,
    backgroundColor: "#EFF5FC",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignSelf: "flex-end",
  },
});
