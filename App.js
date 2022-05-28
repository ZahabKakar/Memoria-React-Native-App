import * as React from "react";
import { StatusBar, LogBox } from "react-native";
import Router from "./src/router/router";

import image from "./src/assets/img1.jpg";
LogBox.ignoreLogs(["Warning: ..."]);

function App() {
  LogBox.ignoreAllLogs();

  return (
    <>
      <StatusBar animated={true} backgroundColor="#AA9376" />
      {/* <HomeImage image={image}/> */}
      <Router />
    </>
  );
}

export default App;
