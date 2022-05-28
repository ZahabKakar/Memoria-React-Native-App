import { View, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Loader = () => {
  return (
    <View>
      <LottieView
        style={[StyleSheet.absoluteFillObject, styles.container]}
        source={require("../assets/loading.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    zIndex: 1,
  },
});
