import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Post from "../Screens/Post";
import Diaries from "../Screens/Diaries";
import BottomTab from "../Components/BottomTab";
import Diary from "../Screens/Dairy";
const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="register" component={Register} /> */}
        <Stack.Screen name="bottomTab" component={BottomTab} />
        <Stack.Screen name="post" component={Post} />
        <Stack.Screen name="diary" component={Diary} />
        <Stack.Screen name="diaries" component={Diaries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
