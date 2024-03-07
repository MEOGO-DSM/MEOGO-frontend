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
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

function Login() {
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const PasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `https://stag-server.xquare.app/mukgen/user/login`,
        {
          userId: `${userId}`,
          password: `${password}`,
        }
      );
    } catch (error) {
      console.log(error.response.message);
      if(error.response.status === 404) setError("유저를 찾을 수 없습니다. 회원가입이 필요합니다.")
      if(error.response.status === 409) setError("아이디 또는 비밀번호를 잘못 입력했습니다.")
      else setError("회원가입 도중 오류가 발생하였습니다.")
    }
  };

  return (
    <View style={styles.container}>
      <Logo width="165px" height="60px" style={styles.logo} />
      <View style={styles.loginBox}>
        <View style={styles.inputContainer}>
        <InputBox
            placeholder="아이디"
            value={userId}
            onChangeText={(value) => setUserId(value)}
          />
          <InputBox
            placeholder="비밀번호"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={(value) => setPassword(value)}
            onEyePress={PasswordVisibility}
          />
        </View>

        <Button buttonTxt="로그인" onPress={(value) => handleLogin(value)}/>
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
            onPress = {() => navigation.navigate('Signup')}
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
