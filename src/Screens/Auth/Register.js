import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./Style";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Colors from "../../Constants/Colors";
import axios from "axios";
import { base_url } from "../../Constants/API";
import { Actions } from "react-native-router-flux";
export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const Submit = () => {
    let url = base_url + "/register";

    let nameValidations = name.length > 6;
    let passwordValidations = password.length > 6;
    let emailValidations = validateEmail(email);

    if (nameValidations && passwordValidations && emailValidations) {
      axios
        .post(url, {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);

          navigation.navigate("bottomTab");
        });
    } else {
      alert(
        "Name, Email & Password must be more than 6 char and email should be valid. Please check again"
      );
    }

    // console.log("second", name, email, password);
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
      {/* register Form */}

      <Input
        title="Name"
        onChange={(e) => setName(e)}
        inputStyle={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray,
        }}
      />

      <Input
        title="Email"
        onChange={(e) => setEmail(e)}
        inputStyle={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray,
        }}
      />
      <Input
        title="Password"
        onChange={(e) => setPassword(e)}
        inputStyle={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray,
        }}
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
