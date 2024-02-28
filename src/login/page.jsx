import { useState } from "react";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import Logo from "../../public/assets/Logo.svg";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";

function Login() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Logo width="165px" height="60px" style={styles.logo} />
      <View style={styles.loginBox}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            maxLength={15}
            placeholder="아이디"
            placeholderTextColor={color.Black[400]}
          />
          <TextInput
            style={styles.input}
            maxLength={20}
            placeholder="비밀번호"
            placeholderTextColor={color.Black[400]}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={fonts.Body["Body 16 Medium"]}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 60,
  },
  logo: {
    marginBottom: 48,
  },
  loginBox: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 16,
    gap: 40,
  },
  inputBox: {
    gap: 12,
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: color.Gray[100],
    borderRadius: 8,
    paddingHorizontal: 14,
  },
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.Blue[600],
    borderRadius: 8,
    color: color.White,
  },
  buttonText: {
    color: color.White,
  },
});
