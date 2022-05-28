import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import moment from "moment";
import React, {
  useState,
  Fragment,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { Calendar } from "react-native-calendars";
import { heightToDp, width, widthToDp } from "../Constants/Dimensions";
import Card from "../Components/Card";
import DiaryCom from "../Components/DairyCom";
import Header from "../Components/Header";
import Colors from "../Constants/Colors";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { base_url } from "../Constants/API";
import { useNavigation } from "@react-navigation/native";

export default function CalendarScreen({ route }) {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState(new Date());
  const [diary, setDiary] = useState([]);
  const [selectDate, setSelectDate] = useState(null);
  const [diaryBasedOnDate, setDiaryBasedOnDate] = useState([]);

  const getNewSelectedDate = useCallback(
    (date, shouldAdd) => {
      const newMonth = new Date(date).getMonth();
      const month = shouldAdd ? newMonth + 1 : newMonth - 1;
      const newDate = new Date(selectedValue.setMonth(month));
      const newSelected = new Date(newDate.setDate(1));
      return newSelected;
    },
    [selectedValue]
  );

  const marked = useMemo(() => {
    return {
      [selectDate]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: Colors.icon,
        // selectedTextColor: ,
      },
    };
  }, [selectDate]);
  const onPressArrowLeft = useCallback(
    (subtract, month) => {
      const newDate = getNewSelectedDate(month, false);
      setSelectedValue(newDate);
      subtract();
    },
    [getNewSelectedDate]
  );

  const onPressArrowRight = useCallback(
    (add, month) => {
      const newDate = getNewSelectedDate(month, true);
      setSelectedValue(newDate);
      add();
    },
    [getNewSelectedDate]
  );

  const CustomHeaderTitle = (
    <TouchableOpacity
      style={styles.customTitleContainer}
      onPress={() => console.warn("Tapped!")}
    >
      <Text style={styles.customTitle}>
        {selectedValue.getMonth() + 1}/{selectedValue.getFullYear()}
      </Text>
    </TouchableOpacity>
  );
  let url = base_url + "/findAll";
  let todayDate = moment().format("YYYY-MM-DD");
  useEffect(() => {
    axios.get(url).then((res) => {
      setDiary(res.data);
      // console.log("dataaaaa", res.data, diary);
      let newData = res.data.filter((diaryData) => {
        moment(diaryData.date).format("YYYY-MM-DD") == todayDate;
      });
      // console.log(newData);
      setDiaryBasedOnDate(newData);
    });

    setSelectDate(todayDate);
  }, []);

  const getDataBasedOnDate = (newDate) => {
    let newData = diary.filter(
      (diaryData) => moment(diaryData.date).format("YYYY-MM-DD") == newDate
    );
    // console.log("datatat", newData);
    setDiaryBasedOnDate(newData.reverse());
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
      <Fragment>
        <View style={styles.container}>
          <Header title="Calendar" />

          <Calendar
            style={styles.calendar}
            // customHeaderTitle={CustomHeaderTitle}
            onPressArrowLeft={onPressArrowLeft}
            onPressArrowRight={onPressArrowRight}
            onDayPress={(date) => {
              // console.log(date);
              setSelectDate(date.dateString);
              getDataBasedOnDate(date.dateString);
            }}
            customHeaderTitle={CustomHeaderTitle}
            markedDates={marked}
            theme={{
              arrowColor: Colors.icon,
            }}
          />
          <View style={styles.DiaryContainer}>
            <Text style={styles.header}>Memories</Text>
            <TouchableWithoutFeedback
              onPress={async () => {
                await AsyncStorage.setItem("navigateToDiaries", "true");
              }}
            >
              <Text style={{ color: "#D1C2B2" }}>See All</Text>
            </TouchableWithoutFeedback>
          </View>

          {diaryBasedOnDate.map((item) => (
            <DiaryCom
              image={item.img}
              heading={item.title}
              text={item.story}
              date={item.date}
              selectDate={selectDate}
              onPress={() =>
                navigation.navigate("diary", {
                  data: item,
                })
              }
            />
          ))}
          {diaryBasedOnDate.length == 0 && (
            <View style={styles.noDataContainer}>
              <Entypo
                style={{ padding: widthToDp(2) }}
                name="emoji-sad"
                size={54}
                color={Colors.gray}
              />
              <Text style={styles.noData}>No data found</Text>
            </View>
          )}
        </View>
      </Fragment>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: widthToDp(90),
    flex: 1,
    alignItems: "center",
  },

  calendar: {
    width: widthToDp(100),
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    padding: 10,
    // backgroundColor: "red",
    fontSize: 16,
  },
  disabledText: {
    color: "grey",
  },
  defaultText: {
    color: "purple",
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  customDay: {
    textAlign: "center",
  },
  customHeader: {
    backgroundColor: "#FCC",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: -4,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black,
  },
  DiaryContainer: {
    width: widthToDp(90),
    height: heightToDp(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: heightToDp(5),
  },
  header: {
    fontSize: widthToDp(5),
    fontWeight: "700",
  },
  noDataContainer: {
    alignItems: "center",
    padding: widthToDp(10),
  },
  noData: {
    fontSize: widthToDp(5),
    padding: widthToDp(3),
    textTransform: "capitalize",
  },
});
