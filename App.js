import * as React from "react";
import { StatusBar } from "react-native";
import BottomTab from "./src/Components/BottomTab";
import Router from "./src/router/router";
import CalendarScreen from "./src/Screens/CalendarScreen";
import Dairy from "./src/Screens/Dairy";
import Post from "./src/Screens/Post";
import Card from "./src/Components/Card";
import DairyCom from "./src/Components/DairyCom";
import Home from "./src/Screens/Home";
import Register from "./src/Screens/Auth/Register";
import Button from "./src/Components/Button";
function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Register />
    </>
  );
}

export default App;
