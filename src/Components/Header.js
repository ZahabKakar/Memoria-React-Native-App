import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { widthToDp } from "../Constants/Dimensions";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";
const Header = ({ title, iconLeft, iconRight }) => {
  return (
    <View style={styles.container}>
      {iconLeft}
      <Text style={styles.text}>{title}</Text>
      {iconRight}
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
    color: Colors.icon,
    textAlign: "center",
    width: "90%",
  },
});
