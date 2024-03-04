import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Signup from "./src/signup/page";
import Login from "./src/login/page";
import Main from "./src/main/page";
import NavBar from "./components/NavBar";
import WhatIsSvg from "./WhatIsSvg";
import SearchPage from "./src/search/page";
import SchoolInfo from "./src/schoolInfo/page";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("./public/fonts/Pretendard-Bold.otf"),
    "Pretendard-Medium": require("./public/fonts/Pretendard-Medium.otf"),
    "Pretendard-Regular": require("./public/fonts/Pretendard-Regular.otf"),
    "Pretendard-SemiBold": require("./public/fonts/Pretendard-SemiBold.otf"),
  });
  if (!fontsLoaded) return <StatusBar />;
  return (
    <View style={styles.container}>
      <SearchPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
});
