import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryCom from "../Components/DairyCom";

import { base_url } from "../Constants/API";
import Header from "../Components/Header";
const Diaries = () => {
  const [data, setData] = useState([]);

  const url = base_url + "/findAll";
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.reverse());
    });
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      vertical={true}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Header title="Memories" />
        {data.map((item) => (
          <DiaryCom
            image={item.img}
            heading={item.title}
            text={item.story}
            date={item.date}
            onPress={() =>
              navigation.navigate("diary", {
                data: item,
              })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Diaries;
