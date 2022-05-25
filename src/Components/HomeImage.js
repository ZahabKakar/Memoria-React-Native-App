import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { widthToDp, heightToDp } from "../Constants/Dimensions";

const HomeImage = ({ onPress, image, date, month, heading }) => {
  return (
    <View style={styles.item}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.dateContainer}>
          <Text style={[styles.datetext, { fontSize: widthToDp(12) }]}>
            {date}
          </Text>
          <Text style={styles.datetext}>{month}</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={onPress}
          style={styles.headingContainer}
        >
          <Text style={[styles.datetext, styles.heading]}>{heading}</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default HomeImage;

const styles = StyleSheet.create({
  image: {
    width: widthToDp(85),
    height: "100%",
    resizeMode: "cover",
    borderRadius: widthToDp(5),
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  dateContainer: {
    width: widthToDp(25),
    height: heightToDp(25),
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.30)",
    borderBottomRightRadius: widthToDp(5),
  },
  datetext: {
    fontSize: widthToDp(5),
    textTransform: "uppercase",
    color: "white",
  },
  heading: {
    width: widthToDp(85),
    position: "absolute",
    bottom: 0,
    fontWeight: "bold",
    padding: widthToDp(3),
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.49)",
  },
  headingContainer: {
    width: widthToDp(80),
    backgroundColor: "#FFF0E9",
    borderBottomLeftRadius: widthToDp(2),
    borderBottomRightRadius: widthToDp(2),
  },
});
