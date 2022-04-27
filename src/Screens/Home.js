import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { widthToDp, heightToDp } from "../Constants/Dimensions";
import { white } from "../Constants/Colors";
import HomeImage from "../Components/HomeImage";
import Card from "../Components/Card";
import DairyCom from "../Components/DairyCom";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    date: "12",
    month: "Feb",
    heading: "Beach",
    image:
      "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    date: "25",
    month: "nov",
    heading: "graduation",
    image:
      "https://images.unsplash.com/photo-1526781480235-d79b4866aa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    date: "19",
    month: "Mar",
    heading: "birthday",
    image:
      "https://images.unsplash.com/photo-1504437484202-613bb51ce359?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  },
];
const DATATwo = [
  {
    id: "1",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    heading: "Beach",
    image:
      "https://images.unsplash.com/photo-1526781480235-d79b4866aa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },

  {
    id: "2",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without...",
    heading: "Graduation",
  },
  {
    id: "3",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without...",
    heading: "Graduation",
  },
];

const Home = () => {
  return (
    // <Text>asdsa</Text>
    <View style={styles.container}>
      <View style={{ height: "40%" }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={(item) => (
            <HomeImage
              image={item.item.image}
              date={item.item.date}
              month={item.item.month}
              heading={item.item.heading}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>

      <View style={{ height: "58%", backgroundColor: "red" }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATATwo}
          renderItem={(item) => (
            <DairyCom
              image={item.item.image}
              heading={item.item.heading}
              text={item.item.text}
            />
          )}
          keyExtractor={(item) => item.id}
          vertical={true}
        />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
