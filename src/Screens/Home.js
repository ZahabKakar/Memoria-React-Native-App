import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { widthToDp, heightToDp } from "../Constants/Dimensions";
import HomeImage from "../Components/HomeImage";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ route }) => {
  const [selectedValue, setSelectedValue] = useState(new Date());
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
  const navigation = useNavigation();

  return (
    // <Text>asdsa</Text>
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.imageContainer}>
          {/* <View style={styles.icon}>
              <AntDesign name="plus" size={54} color={"#333"} />
            </View>
            <Image
              style={styles.image}
              source={require("../assets/img1.jpg")}
            /> */}
          <HomeImage
            heading="add"
            date={selectedValue.getDate()}
            month={monthNames[selectedValue.getMonth()]}
            image="https://images.unsplash.com/photo-1607827447604-d9a8c439186e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"
            onPress={async () => {
              await AsyncStorage.setItem("navigateToAdd", "true");
            }}
          />
        </View>
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
  imageContainer: {
    width: widthToDp(85),
    flex: 1,
    borderRadius: widthToDp(5),
    backgroundColor: "#D6D6D6",
    justifyContent: "center",
    alignItems: "center",
    margin: widthToDp(5),
  },

  icon: {
    top: "50%",
    position: "absolute",
    width: "15%",
    borderRadius: 15,
    alignItems: "center",
  },
});
