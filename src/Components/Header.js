import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { widthToDp } from "../Constants/Dimensions";
const Header = ({ title, iconLeft, iconRight }) => {
  return (
    <View style={styles.container}>
      {!iconLeft && <AntDesign name="arrowleft" size={24} color="gray" />}
      <Text style={styles.text}>{title}</Text>
      {!iconRight && <EvilIcons name="close" size={24} color="gray" />}
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    width: widthToDp(90),
    padding: widthToDp(5),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: widthToDp(5),
    color: "gray",
  },
});
