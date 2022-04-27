import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, Fragment, useCallback, useMemo } from "react";
import { Calendar } from "react-native-calendars";
import { heightToDp, width, widthToDp } from "../Constants/Dimensions";
import Card from "../Components/Card";

export default function CalendarScreen() {
  const [selectedValue, setSelectedValue] = useState(new Date());
  const [selectDate, setSelectDate] = useState(null);
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
        {selectedValue.getMonth() + 1}-{selectedValue.getFullYear()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Fragment>
      <View style={styles.container}>
        <Calendar
          style={styles.calendar}
          // customHeaderTitle={CustomHeaderTitle}
          onPressArrowLeft={onPressArrowLeft}
          onPressArrowRight={onPressArrowRight}
          onDayPress={(date) => {
            setSelectDate(date.dateString);
          }}
        />
        <View style={styles.dairyContainer}>
          <Text style={styles.header}>Memories</Text>
          <Text style={{ color: "#D1C2B2" }}>See All</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          vertical={true}
          style={{ height: heightToDp(80) }}
        >
          {selectDate ? (
            <>
              <Card date={selectDate} />
              <Card date={selectDate} />
              <Card date={selectDate} />
              <Card date={selectDate} />
              <Card date={selectDate} />
              <Card date={selectDate} />
            </>
          ) : null}
        </ScrollView>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
  },

  calendar: {
    width: widthToDp(100),
    paddingTop: heightToDp(3),
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
    color: "#D1C2B2",
  },
  dairyContainer: {
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
});
