import React, { useState } from "react";
import { StyleSheets } from "react-native";
import { BottomNavigation } from "react-native-paper";
import Post from "../Screens/Post";
import CalendarScreen from "../Screens/CalendarScreen";
import Dairy from "../Screens/Dairy";
import Home from "../Screens/Home";
const BottomTab = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "home", icon: "home", color: "#1A212F" },
    {
      key: "post",
      title: "Add",
      icon: "plus-circle",
      color: "#1A212F",
    },
    { key: "dairy", title: "Dairy", icon: "book", color: "#1A212F" },
    { key: "calendar", title: "Calendar", icon: "calendar", color: "#1A212F" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    post: Post,
    calendar: CalendarScreen,
    dairy: Dairy,
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
