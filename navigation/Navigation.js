import React from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import ShopScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Badge } from "react-native-elements";
import { useSelector } from "react-redux";
import { GREEN , GRAY } from "../constants";

const Stack = createStackNavigator();

export default tabBar = () => {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "home":
        icon = "home";
        break;
      case "shop":
        icon = "cart";
        break;
      case "title3":
        icon = "heart";
        break;

      case "title4":
        icon = "person";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? GREEN : GRAY}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          elevation: 5,
        }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const TabScreens = ({ navigation }) => {
    const cart = useSelector((state) => state.products.cart);
    const numberOfItems = cart ? cart.length : 0;


    return (
      <CurvedBottomBar.Navigator
        tabBarOptions={{
          tabBarHideOnKeyboard: true,
          keyboardHidesTabBar: true,
        }}
        screenOptions={{ tabBarHideOnKeyboard: true, headerShown: false }}
        style={styles.bottomBar}
        strokeWidth={0}
        height={55}
        circleWidth={55}
        bgColor="#EEF5FC"
        initialRouteName="home"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }, e) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
              }}
              onPress={() => navigate("Cart")}
            >
              <Ionicons name="basket-outline" size={25} color="white" />
              {numberOfItems !== 0 && (
              <Badge
                textStyle={{
                  color: GREEN,
                  fontSize : 9
                }}
                value={numberOfItems}
                badgeStyle={{
                  width: 18,
                  height: 18,
                  borderRadius: 100,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: 3,
                }}
                containerStyle={{
                  position: "absolute",
                  top : 22,
                  left : 15 ,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            )}
            </TouchableOpacity>

          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="home"
          position="LEFT"
          component={ShopScreen}
        />
        <CurvedBottomBar.Screen
          name="shop"
          component={ShopScreen}
          position="LEFT"
        />
        <CurvedBottomBar.Screen
          name="title3"
          component={ShopScreen}
          position="RIGHT"
        />

        <CurvedBottomBar.Screen
          name="title4"
          component={ShopScreen}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={TabScreens} />
          <Stack.Screen name="ProductDetail" component={ProductDetailsScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    backgroundColor: GREEN,
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: GRAY,
  },
  img: {
    width: 30,
    height: 30,
  },
});
