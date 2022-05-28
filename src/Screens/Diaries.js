import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryCom from "../Components/DairyCom";
import Loader from "../Components/Loader";
import LottieView from "lottie-react-native";

import { widthToDp } from "../Constants/Dimensions";
import { base_url } from "../Constants/API";
import Header from "../Components/Header";
import { ActivityIndicator } from "react-native-paper";
const Diaries = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(true);

  const url = base_url + "/findAll";
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.reverse());
      setActive(false);
    });
  });
  if (active) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          style={{ width: widthToDp(30) }}
          source={require("../assets/loading.json")}
          autoPlay
          loop
        />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      vertical={true}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Header title="Memories" />
        {/* <ActivityIndicator /> */}

        {data.map((item) => (
          <DiaryCom
            image={item.img}
            heading={item.title}
            text={item.story}
            date={item.date}
            // onPress={() =>
            //   navigation.navigate("diary", {
            //     data: item,
            //   })
            // }
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Diaries;
