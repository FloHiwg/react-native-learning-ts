import React, { Component } from "react";
import Orientation, { orientation } from "react-native-orientation";
import Navigator from "./src/navigation/Navigator";
import {
  createAppContainer
} from 'react-navigation';

const App = createAppContainer(Navigator);
export default App;
