import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { widthToDp, heightToDp } from "../Constants/Dimensions";

const HomeImage = ({ title, image, date, month, heading }) => {
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
          <Text style={[styles.datetext, { fontSize: widthToDp(9) }]}>
            {date}
          </Text>
          <Text style={styles.datetext}>{month}</Text>
        </View>
        <Text
          style={[
            styles.datetext,
            {
              position: "absolute",
              bottom: 0,
              padding: widthToDp(2),
              color: "#fff",
            },
          ]}
        >
          {heading}
        </Text>
      </View>
    </View>
  );
};

export default HomeImage;

const styles = StyleSheet.create({
  image: {
    width: widthToDp(90),
    height: heightToDp(50),
    resizeMode: "cover",
    opacity: 0.9,
    borderRadius: widthToDp(2),
  },
  item: {
    width: widthToDp(90),
    height: heightToDp(50),

    margin: heightToDp(5),
  },
  title: {
    fontSize: 32,
  },
  dateContainer: {
    width: widthToDp(20),
    height: heightToDp(18),
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.21)",
    borderBottomRightRadius: widthToDp(5),
  },
  datetext: {
    fontSize: widthToDp(5),
    textTransform: "uppercase",
    color: "gray",
  },
});
