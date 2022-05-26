import React, { useState } from "react";
import { StyleSheets } from "react-native";
import { BottomNavigation } from "react-native-paper";
import Post from "../Screens/Post";
import Colors from "../Constants/Colors";
import Diary from "../Screens/Dairy";
import Home from "../Screens/Home";
import CalendarScreen from "../Screens/CalendarScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BottomTab = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "home", icon: "home", color: Colors.icon },

    {
      key: "post",
      title: "Add",
      icon: "plus-circle",
      color: Colors.icon,
    },

    // { key: "Diary", title: "Diary", icon: "book", color: Colors.icon },
    {
      key: "calendar",
      title: "Calendar",
      icon: "calendar",
      color: Colors.icon,
    },
  ]);

  setInterval(async () => {
    let checkNavigation = await AsyncStorage.getItem("navigateToAdd");

    // console.log(checkNavigation);

    if (checkNavigation == "true") {
      setIndex(1);
      await AsyncStorage.setItem("navigateToAdd", "null");
    }
  }, 500);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    post: Post,
    calendar: CalendarScreen,
    Diary: Diary,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      shifting={true}
      renderScene={renderScene}
    />
  );
};

export default BottomTab;
