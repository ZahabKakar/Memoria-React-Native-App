import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Style from "../Screens/Auth/Style";
import { heightToDp, widthToDp } from "../Constants/Dimensions";
import Header from "../Components/Header";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

import axios from "axios";
import { base_url } from "../Constants/API";

const Diary = ({ route, story }) => {
  const [DiaryData, setDiaryData] = useState({});
  // console.log("dateeeeeeeeeee", DiaryData);
  const navigation = useNavigation();

  function getData() {
    axios.get(base_url + "/Diary/" + route.params.data._id).then((e) => {
      setDiaryData(e.data);
      // console.log("NewData2", e.data);
    });
  }

  useEffect(() => {
    getData();
    const unsubscribe = navigation.addListener("focus", () => {
      getData();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={Style.container}>
      <Header
        title="Diary"
        iconRight={
          <Ionicons
            name="close"
            size={24}
            color={Colors.gray}
            onPress={() =>
              navigation.navigate("bottomTab", { removeStates: true })
            }
          />
          // <Entypo name="dots-three-horizontal" size={24} color="blue" />
        }
      />
      <View style={styles.DiaryContainer}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* {DiaryData.date.slice(0, 10)} */}
            <Text style={styles.date}>
              {moment(DiaryData.date).format("YYYY-MM-DD")}
            </Text>
            <MaterialIcons
              onPress={() => {
                navigation.navigate("post", {
                  edit: true,
                  defaultData: DiaryData,
                });
              }}
              name="edit"
              size={24}
              color={Colors.icon}
            />
          </View>
          <ScrollView
            style={styles.textContainer}
            vertical={true}
            showsVerticalScrollIndicator={false}
          >
            <Image
              style={styles.image}
              source={{
                uri: DiaryData.img,
              }}
            />

            <Text
              style={{
                fontSize: widthToDp(5),
                fontWeight: "bold",
                textTransform: "capitalize",
                color: Colors.icon,
              }}
            >
              {DiaryData.title}
            </Text>
            <Text style={styles.text}>{DiaryData.story}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Diary;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  image: {
    width: widthToDp(90),
    height: heightToDp(60),
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: widthToDp(3),
  },
  DiaryContainer: {
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
    // backgroundColor: "red",
    height: "87%",
    paddingBottom: "10%",
  },
});
