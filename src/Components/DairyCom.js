import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { widthToDp, heightToDp } from "../Constants/Dimensions";
import Card from "../Components/Card";
import Colors from "../Constants/Colors";
import moment from "moment";

const DiaryCom = ({ image, heading, text, date, selectDate, onPress }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <>
          <View>
            <View style={styles.dateContainer}>
              <Text style={[styles.datetext, { fontSize: widthToDp(9) }]}>
                {moment(date).date()}
              </Text>
              <Text style={styles.datetext}>
                {monthNames[moment(date).month()]}
              </Text>
            </View>
          </View>
          <View>
            {image ? (
              <Image
                style={styles.image}
                source={{
                  uri: image,
                }}
              />
            ) : (
              <View style={styles.DiaryContainer}>
                <View>
                  <Text style={styles.heading}>{heading}</Text>

                  <ScrollView style={styles.textContainer} vertical={true}>
                    <Text style={styles.text}>{text}</Text>
                  </ScrollView>
                </View>
              </View>
            )}
          </View>
        </>
      </View>
    </TouchableOpacity>
  );
};

export default DiaryCom;

const styles = StyleSheet.create({
  container: {
    width: widthToDp(90),
    height: heightToDp(40),
    flexDirection: "row",
    shadowColor: "gray",
    alignSelf: "center",
    elevation: 10,
    backgroundColor: "#fff",
    marginBottom: widthToDp(5),
  },
  image: {
    width: widthToDp(70),
    height: heightToDp(40),
    resizeMode: "cover",
    borderRadius: widthToDp(5),
  },
  dateContainer: {
    width: widthToDp(30),
    height: heightToDp(40),
    alignItems: "center",
    justifyContent: "center",
  },
  datetext: {
    fontSize: widthToDp(5),
    textTransform: "uppercase",
    color: "gray",
  },
  DiaryContainer: {
    width: widthToDp(60),
    justifyContent: "center",
  },
  heading: {
    padding: widthToDp(2),
    fontSize: widthToDp(4),
    textAlign: "center",
    fontWeight: "700",
    textTransform: "capitalize",
    color: "black",
  },
  text: {
    fontSize: widthToDp(3.5),
    lineHeight: heightToDp(6),
    textAlign: "left",
  },
});
