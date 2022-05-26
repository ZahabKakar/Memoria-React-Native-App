import * as React from "react";
import { StatusBar } from "react-native";
import Router from "./src/router/router";

import image from "./src/assets/img1.jpg";

function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#AA9376" />
      {/* <HomeImage image={image}/> */}
      <Router />
    </>
  );
}

export default App;
