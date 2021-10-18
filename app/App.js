
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/login/login';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  

});

const App = createAppContainer(MainNavigator);
export default App;

