import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Style";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Colors from "../../Constants/Colors";
// import { Actions } from "react-native-router-flux";
export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Input />
      <Input />
      <Button onPress={() => console.log("123")} />

      <Text style={styles.text}>
        Already have an account?
        <Text
          style={{ color: Colors.primary, textDecorationLine: "underline" }}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
}
