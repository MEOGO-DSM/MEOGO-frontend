import { StyleSheet, Text, View } from "react-native";
import Signup from "./src/signup/page";
import Login from "./src/login/page";
import Main from "./src/main";
import MyComponent from "./Test";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
