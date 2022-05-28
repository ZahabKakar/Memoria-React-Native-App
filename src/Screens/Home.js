import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import { widthToDp, heightToDp } from "../Constants/Dimensions";
import HomeImage from "../Components/HomeImage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { FlatList } from "react-native-web";
import axios from "axios";
import { base_url } from "../Constants/API";
const { width } = Dimensions.get("window");
import moment from "moment";
import Loader from "../Components/Loader";
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

  const [isSliding, setIsSliding] = useState(false);
  const url = base_url + "/findAll";
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  // let currentMonth =
  useEffect(() => {
    axios.get(url).then((res) => {
      const month = moment().month() + 1;
      const newData = res.data.filter(
        (data) => moment(data.date).format("M") == month
      );
      setData(newData.reverse());
      // console.log("=>", newData);
    });
  }, []);

  const post = (item) => {
    navigation.navigate("diary", {
      data: item,
    });
    console.log(item);
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     alert("Screen was focused");

  //     return () => {
  //       alert("Screen was unfocused");
  //       // Useful for cleanup functions
  //     };
  //   }, [])
  // );

  return (
    // <Text>asdsa</Text>
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.imageContainer}>
          {data.length == 0 && (
            <HomeImage
              heading="add"
              date={selectedValue.getDate()}
              month={monthNames[selectedValue.getMonth()]}
              image="https://images.unsplash.com/photo-1607827447604-d9a8c439186e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"
              onPress={async () => {
                await AsyncStorage.setItem("navigateToAdd", "true");
              }}
            />
          )}
          <Loader />
          {data.length > 0 && (
            <>
              <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
              >
                {data.map((item) => {
                  return (
                    <TouchableWithoutFeedback
                      onPress={() => {
                        post(item);
                        // console.log(item);
                      }}
                    >
                      <View>
                        <HomeImage
                          heading={item.title}
                          date={moment(item.date).format("D")}
                          month={moment(item.date).format("MMM")}
                          image={item.img}
                          // onPress={() => {
                          //   console.log("dghhk");
                          // }}
                        />
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </ScrollView>
            </>
          )}
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
    width: width,
    flex: 1,
    marginTop: widthToDp(3),
    marginBottom: widthToDp(3),
  },

  icon: {
    top: "50%",
    position: "absolute",
    width: "15%",
    borderRadius: 15,
    alignItems: "center",
  },
});
