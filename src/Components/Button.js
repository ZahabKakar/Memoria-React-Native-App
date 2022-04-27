// import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
// import React from "react";
// import { heightToDp, widthToDp } from "../Constants/Dimensions";
// import Colors from "../Constants/Colors";
// import { Actions } from "react-native-router-flux";

// export default function Button({ onPress, width }) {
//   return (
//     <TouchableWithoutFeedback onPress={onPress}>
//       <View style={[styles.container, { width: widthToDp(width) }]}>
//         {/* <Text style={styles.text}>Button</Text> */}
//         <Text>gjjj</Text>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Colors.primary,
//     borderRadius: 50,
//     color: Colors.primary,
//     height: heightToDp("12"),
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: heightToDp("5"),
//     marginBottom: heightToDp("5"),
//   },
//   text: {
//     textAlign: "center",
//     fontSize: widthToDp(4),
//     color: Colors.white,
//     fontWeight: "600",
//   },
// });

import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Colors from "../Constants/Colors";
import { heightToDp, widthToDp } from "../Constants/Dimensions";

const Button = ({ onPress, width, title }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { width: widthToDp(width) }]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
    color: Colors.primary,
    height: heightToDp("12"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: heightToDp("5"),
    marginBottom: heightToDp("5"),
  },
  text: {
    textAlign: "center",
    fontSize: widthToDp(4),
    color: Colors.white,
    fontWeight: "600",
  },
});
