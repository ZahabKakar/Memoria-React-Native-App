import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./Style";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Colors from "../../Constants/Colors";
import { AsyncStorage } from "react-native";
import axios from "axios";
export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = () => {
    console.log(name, email, password);

    axios
      .get("https://localhost:3000/post/getAll", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => console.log("jhgj", res.data))
      .catch((error) => console.log(error));

    console.log("second", name, email, password);
  };

  // _stordaseData = async () => {
  //   try {
  //     await AsyncStorage.setItem(
  //       'name',
  //       'I like to save it.'
  //     );
  //   } catch (error) {
  //     // Error saving data
  //   }
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <Input
        title="Name"
        onChange={(e) => setName(e)}
        inputStyle={{ borderBottomWidth: 1, borderBottomColor: Colors.gray }}
      />

      <Input
        title="Email"
        onChange={(item) => setEmail(item)}
        inputStyle={{ borderBottomWidth: 1, borderBottomColor: Colors.gray }}
      />
      <Input
        title="Password"
        onChange={(password1) => setPassword(password1)}
        inputStyle={{ borderBottomWidth: 1, borderBottomColor: Colors.gray }}
      />
      <Button width={90} onPress={Submit} title="Sign up" />

      <Text style={styles.text}>
        Already have an account?
        <Text
          onPress={() => navigation.navigate("login")}
          style={{ color: Colors.primary, textDecorationLine: "underline" }}
        >
          Sign in
        </Text>
      </Text>
    </View>
  );
}
