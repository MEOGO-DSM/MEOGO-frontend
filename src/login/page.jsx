import { useState } from "react";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Logo from "../../public/assets/Logo.svg";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <View style={styles.container}>
      <Logo width="165px" height="60px" style={styles.logo} />
      <View style={styles.loginBox}>
        <View style={styles.inputContainer}>
          <InputBox placeholder="아이디" maxLength={15} />
          <InputBox
            placeholder="비밀번호"
            maxLength={20}
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
            onEyePress={PasswordVisibility}
          />
        </View>

        <Button buttonTxt="로그인" />
      </View>
      <View style={styles.signupBox}>
        <Text
          style={{ ...fonts.Body["Body 14 Medium"], color: color.Gray[400] }}
        >
          계정이 없으신가요?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              ...fonts.Body["Body 14 Medium"],
              color: color.Blue[600],
            }}
          >
            회원가입
          </Text>
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
    paddingHorizontal: 20,
    gap: 40,
  },
  inputContainer: {
    gap: 12,
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: color.Gray[100],
    borderRadius: 8,
    paddingHorizontal: 14,
  },
  signupBox: {
    flexDirection: "row",
    width: "100%",
    marginTop: 24,
    gap: 6,
    justifyContent: "center",
  },
});
