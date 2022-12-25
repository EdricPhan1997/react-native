import { StatusBar } from "expo-status-bar";
import { withExpoSnack } from "nativewind";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { RenderArray, LearnTextImputAndKeyboard } from "./screens/Learn";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Learn" component={LearnTextImputAndKeyboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withExpoSnack(App);
