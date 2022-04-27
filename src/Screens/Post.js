import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Header from "../Components/Header";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { widthToDp, heightToDp } from "../Constants/Dimensions";
import Colors from "../Constants/Colors";
const Post = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Write" />
      <Input
        title="Title"
        placeholder="Write the title here..."
        multiline={true}
        numberOfLines={5}
        maxLength={70}
        style={{
          height: heightToDp(15),
          color: "black",
          fontSize: widthToDp(4),
          padding: widthToDp(3),
        }}
        textStyle={{ color: "gray", fontSize: widthToDp(5) }}
      />
      <View style={{ marginTop: heightToDp(-10) }}>
        <Input
          title="Story"
          placeholder="Write the title here..."
          multiline={true}
          numberOfLines={120}
          style={{
            height: heightToDp(100),
            color: "black",
            fontSize: widthToDp(3.5),
            padding: widthToDp(3),
          }}
          textStyle={{ color: "gray", fontSize: widthToDp(5) }}
        />
      </View>
      <View style={styles.bottom}>
        <AntDesign name="delete" size={24} color={Colors.icon} />
        <AntDesign name="camerao" size={24} color={Colors.icon} />
        <Entypo name="image" size={24} color={Colors.icon} />
        <Button width={30} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    width: widthToDp(80),
    height: heightToDp(15),
    flexDirection: "row",
    justifyContent: "space-between",
    padding: widthToDp(2),
    margin: widthToDp(2),
    alignItems: "center",
  },
});
