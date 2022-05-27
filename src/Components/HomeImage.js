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
            uri:
              image ||
              "https://images.unsplash.com/photo-1607827447604-d9a8c439186e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
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
    flex: 1,
    width: widthToDp(85),
    // height: widthToDp(100),
    resizeMode: "cover",
    borderRadius: widthToDp(5),
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: widthToDp(2),
    marginRight: widthToDp(5),
    marginTop: widthToDp(2),
    marginBottom: widthToDp(5),
    // backgroundColor: "red",
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
