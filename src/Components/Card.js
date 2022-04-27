import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { heightToDp, width, widthToDp } from "../Constants/Dimensions";

const Card = ({ date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>

      <Text style={styles.heading}>Full day Hike in the Mountain</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: widthToDp(90),
    backgroundColor: "#FFF0E9",
    height: heightToDp(18),
    paddingTop: heightToDp(3),
    paddingBottom: heightToDp(3),
    paddingRight: widthToDp(5),
    paddingLeft: widthToDp(5),
    justifyContent: "center",
    marginBottom: heightToDp(3),
  },
  date: {
    paddingTop: heightToDp(1),
    paddingBottom: heightToDp(1),
  },
  heading: {
    fontSize: widthToDp(4),
    letterSpacing: 1,
    textTransform: "capitalize",
    paddingTop: heightToDp(1),
    paddingBottom: heightToDp(1),
  },
});
