import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { widthToDp, heightToDp } from "../Constants/Dimensions";
import Colors from "../Constants/Colors";

const Input = ({
  title,
  onChange,
  placeholder,
  multiline,
  numberOfLines,
  maxLength,
  style,
  textStyle,
  textAlign,
  inputStyle,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.text, textStyle]}>{title}</Text>

        <View style={inputStyle}>
          <TextInput
            style={[{ paddingTop: 3 }, style]}
            multiline={multiline}
            onChangeText={onChange}
            placeholder={placeholder}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
            textAlignVertical="top"
            textAlign={textAlign}
          />
        </View>
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    color: Colors.primary,
    width: widthToDp("90"),
    display: "flex",
    justifyContent: "center",
    marginTop: heightToDp("5"),

    marginBottom: heightToDp("5"),
  },

  text: {
    fontSize: widthToDp(3.5),
    color: Colors.gray,
    fontWeight: "600",
    paddingBottom: 5,
  },
});
