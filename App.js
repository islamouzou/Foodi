import React from "react";
import Navigation from "./navigation/Navigation";
import store from "./store/";
import { Provider } from "react-redux";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./theme/fonts";

export default function App() {
  const [fontsLoaded] = useFonts({
    [fonts.regular]: require("./assets/fonts/CircularStd-Medium.otf"),
    [fonts.bold]: "https://fonts.cdnfonts.com/s/15011/CircularStd-Bold.woff",
  });
  if (!fontsLoaded)
    return (
      <ActivityIndicator
        size="large"
        style={{ justifyContent: "center", flex: 1 }}
      />
    );
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
