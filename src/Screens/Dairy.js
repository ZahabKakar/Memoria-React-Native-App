import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Style from "../Screens/Auth/Style";
import { heightToDp, widthToDp } from "../Constants/Dimensions";
import Header from "../Components/Header";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";
const Dairy = () => {
  return (
    <View style={Style.container}>
      <Header
        title="Dairy"
        iconRight={
          <Entypo name="dots-three-horizontal" size={24} color="gray" />
        }
      />
      <View style={styles.dairyContainer}>
        <View>
          <Text style={styles.date}>Friday, 13 March 2021</Text>
          <ScrollView
            style={styles.textContainer}
            vertical={true}
            showsVerticalScrollIndicator={false}
          >
            <Image style={styles.image} source={require("../assets/flo.jpg")} />

            <Text style={styles.text}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available.In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content. Lorem ipsum may be used as
              a placeholder before final copy is available. a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available. used as a
              placeholder before final copy is available. used as a placeholder
              before final copy is available. used as a placeholder before final
              copy is available.
            </Text>
          </ScrollView>
        </View>
      </View>
      <MaterialIcons name="edit" size={24} color={Colors.icon} />
    </View>
  );
};

export default Dairy;
const styles = StyleSheet.create({
  image: {
    width: widthToDp(90),
    height: heightToDp(60),
    resizeMode: "contain",
  },
  dairyContainer: {
    width: widthToDp(90),
  },
  date: {
    padding: widthToDp(2),
    color: Colors.icon,
    fontSize: widthToDp(4),
  },
  text: {
    fontSize: widthToDp(3.5),
    lineHeight: heightToDp(6),
    textAlign: "left",
  },
  textContainer: {
    height: "70%",
    marginBottom: heightToDp(3),
  },
});
