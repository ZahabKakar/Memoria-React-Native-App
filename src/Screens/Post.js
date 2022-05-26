import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";

import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Header from "../Components/Header";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { widthToDp, heightToDp } from "../Constants/Dimensions";
import Colors from "../Constants/Colors";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { TextInput } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import axios from "axios";
import { base_url } from "../Constants/API";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
const Post = ({ route }) => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  // const [date, setDate] = useState("");
  let url = base_url + "/post";
  let editUrl = base_url + "/diaryUpdate";

  const navigation = useNavigation();

  const isEdit = route?.params?.edit || false;

  const submit = () => {
    // console.log(title, story, date);
    if (isEdit) {
      axios
        .put(editUrl + "/" + `${route?.params?.defaultData?._id}`, {
          title: title || route?.params?.defaultData?.title,
          story: story || route?.params?.defaultData?.story,
          img: img || route?.params?.defaultData?.img,

          // date: date,
        })
        .then((res) => {
          console.log(res.data);
          navigation.navigate("diary", {
            data: res.data,
          });
        });
    } else {
      axios
        .post(url, {
          title: title,
          story: story,
          img: img,
          // date: date,
          // moment(date).format("X")
        })
        .then((res) => {
          console.log(res.data);
          navigation.navigate("diary", {
            data: res.data,
          });
        });
    }
  };
  // Image picker
  const [img, setImage] = useState(null);

  useEffect(() => {
    setImage(route?.params?.defaultData?.img);
  }, []);

  const cameraImage = async () => {
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      let newImage = {
        uri: result.uri,
        type: `test/${result.uri.split(".")[1]}`,
        name: `test/${result.uri.split(".")[1]}`,
      };
      cloudinaryUpload(newImage);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      let newImage = {
        uri: result.uri,
        type: `test/${result.uri.split(".")[1]}`,
        name: `test/${result.uri.split(".")[1]}`,
      };
      cloudinaryUpload(newImage);
    }
  };

  const handleDelet = () => {
    Alert.alert(
      "Delect",
      "Are you sure you want to delect your Image, Title and Story",
      [
        {
          text: "Yes",
          onPress: () => {
            setTitle("zahab");
            setStory(".");
            setImage(null);
          },
        },
        { text: "No" },
      ]
    );
  };
  const handelImageDelete = () => {
    Alert.alert("Delect", "Are you sure you want to delect this image?", [
      { text: "Yes", onPress: () => setImage(null) },
      { text: "No" },
    ]);
  };

  const cloudinaryUpload = (img) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "upload_preset");
    data.append("cloud_name", "CLOUDNAME");

    fetch("https://api.cloudinary.com/v1_1/CLOUDNAME/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);
      });
  };

  return (
    <View style={styles.container}>
      <Header title="Write" />
      <React.Fragment>
        {!img && (
          <TouchableWithoutFeedback onPress={pickImage}>
            <View style={styles.image}>
              <View style={styles.icon}>
                <AntDesign name="plus" size={54} color={Colors.gray} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        {img && (
          <TouchableWithoutFeedback onPress={handelImageDelete}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: img,
              }}
            />
          </TouchableWithoutFeedback>
        )}
      </React.Fragment>

      <View style={{ flex: 1 }}>
        <Input
          placeholder="Title"
          // placeholder="Title"
          multiline={true}
          defaultValue={route?.params?.defaultData?.title}
          // numberOfLines={2}
          maxLength={70}
          onChange={(e) => setTitle(e)}
          style={{
            color: "black",
            paddingLeft: widthToDp(3),
            fontSize: widthToDp(4.5),
            width: "100%",
            height: heightToDp(14),
          }}
          styleContainer={{
            marginTop: heightToDp("0"),
          }}
          textStyle={{
            color: "gray",
            fontSize: widthToDp(5),
          }}
        />

        <Input
          onChange={(e) => setStory(e)}
          placeholder="Write the title here..."
          defaultValue={route?.params?.defaultData?.story}
          multiline={true}
          style={{
            // backgroundColor: "#f2f2f2",
            height: heightToDp(55),
            color: "black",
            fontSize: widthToDp(3),
            paddingLeft: widthToDp(3),
          }}
          textStyle={{ color: "gray", fontSize: widthToDp(5) }}
        />
      </View>

      <View style={styles.bottom}>
        <AntDesign
          name="delete"
          size={24}
          color={Colors.icon}
          onPress={handleDelet}
        />
        <AntDesign
          name="camerao"
          size={24}
          color={Colors.icon}
          onPress={cameraImage}
        />
        <Entypo
          name="image"
          size={24}
          color={Colors.icon}
          onPress={pickImage}
        />
        <Button width={30} title="Save" onPress={submit} />
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
  imageStyle: {
    width: widthToDp(90),
    height: heightToDp(90),
    resizeMode: "cover",
    borderRadius: 5,
    marginBottom: heightToDp(3),
  },
  bottom: {
    // position: "absolute",
    // bottom: 0,
    width: widthToDp(80),
    height: heightToDp(17),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: widthToDp(90),
    height: heightToDp(50),
    backgroundColor: "#D6D6D6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: widthToDp(5),
    marginBottom: widthToDp(5),
  },
  icon: {
    width: "15%",
    borderRadius: 15,
    alignItems: "center",
  },
});
{
  /* <View style={{ backgroundColor: "pink", height: heightToDp(90) }}>


</View> 

   













*/
}
