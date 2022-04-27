import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";
import { widthToDp, heightToDp } from "../../Constants/Dimensions";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  header: {
    padding: widthToDp(5),

    fontSize: widthToDp("10"),
    color: Colors.primary,
  },
  text: {
    padding: widthToDp(5),
    color: Colors.gray,
  },
});

module.exports = styles;
