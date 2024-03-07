import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Signup from "./src/signup/page";
import Login from "./src/login/page";
import Main from "./src/main/page";
import NavBar from "./components/NavBar";
import WhatIsSvg from "./WhatIsSvg";
import SchoolInfo from "./src/schoolInfo/page";
import SchoolReview from "./src/schoolReview/page";
import WritePost from "./src/community/WritePost";
import CommunityPage from "./src/community/page";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("./public/fonts/Pretendard-Bold.otf"),
    "Pretendard-Medium": require("./public/fonts/Pretendard-Medium.otf"),
    "Pretendard-Regular": require("./public/fonts/Pretendard-Regular.otf"),
    "Pretendard-SemiBold": require("./public/fonts/Pretendard-SemiBold.otf"),
  });
  if (!fontsLoaded) return <StatusBar />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
});
