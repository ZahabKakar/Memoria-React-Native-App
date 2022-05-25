import * as React from "react";
import { StatusBar } from "react-native";
import BottomTab from "./src/Components/BottomTab";
import CalendarScreen from "./src/Screens/CalendarScreen";
import Diary from "./src/Screens/Diary";
import Post from "./src/Screens/Post";
import Card from "./src/Components/Card";
import DiaryCom from "./src/Components/DiaryCom";
import HomeImage from "./src/Components/HomeImage";
import Register from "./src/Screens/Auth/Register";
import Button from "./src/Components/Button";
import Router from "./src/router/router";
import Test from "./Test";
import image from "./src/assets/img1.jpg";

function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#AA9376" />
      {/* <HomeImage image={image}/> */}
      <Router />
    </>
  );
}

export default App;
