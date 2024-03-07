import { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import TopBar from "../../components/TopBar";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function Signup() {
  const navigation = useNavigation();
  const [inputData, setInputData] = useState({
    nickName: "",
    userId: "",
    password: "",
    password2: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [nameError, setNameError] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  const { nickName, userId, password, password2 } = inputData;

  const PasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  const PasswordVisibility2 = () => {
    setPasswordVisible2((prevVisible) => !prevVisible);
  };

  const inputChange = (name, value) => {
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSignUp = async () => {
    try {
      if (nickName.length < 1 || nickName.length > 5)
        setNameError("이름은 1글자 이상 5글자 이하여야 합니다.");
      if (userId.length < 5 || userId.length > 15)
        setIdError("아이디는 5글자 이상 15글자 이하여야 합니다.");
      if (password.length < 5 || password.length > 20)
        setPasswordError("비밀번호는 5글자 이상 20글자 이하여야 합니다.");
      if (!password.match["^(?=.*[!@#$%^&*])(?=.{1,20}$).*"])
        setPasswordError("영문, 특수기호를 조합하여 사용하세요.");
      if (password !== password2)
        setPassword2Error("비밀번호가 일치하지 않습니다.");

      const response = await axios.post(
        `https://stag-server.xquare.app/mukgen/user/signup`,
        {
          nickName,
          userId,
          password,
        }
      );
      navigation.navigate("Login");
      return response;
    } catch (error) {
      console.log(error.response.message);
      if (error.response.status === 409)
        setIdError("이미 존재하는 아이디 입니다.");
      else setPassword2Error("회원가입 도중 오류가 발생하였습니다.");
    }
  };

  return (
    <View style={styles.container}>
      <TopBar text="회원가입" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.signupBox}>
          <InputBox
            inputTitle="이름"
            placeholder="이름"
            minLength={1}
            maxLength={5}
            value={nickName}
            onChangeText={(value) => inputChange("nickName", value)}
            error={nameError}
          />
          <InputBox
            inputTitle="아이디"
            placeholder="최소 5자, 최대 15자"
            minLength={5}
            maxLength={15}
            value={userId}
            onChangeText={(value) => inputChange("userId", value)}
            error={idError}
          />
          <InputBox
            inputTitle="비밀번호"
            placeholder="특수문자 1자 이상, 최대 20자"
            minLength={5}
            maxLength={20}
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={(value) => inputChange("password", value)}
            onEyePress={PasswordVisibility}
            error={passwordError}
          />
          <InputBox
            inputTitle="비밀번호 확인"
            placeholder="비밀번호"
            maxLength={20}
            secureTextEntry={!passwordVisible2}
            value={password2}
            onChangeText={(value) => inputChange("password2", value)}
            onEyePress={PasswordVisibility2}
            error={password2Error}
          />
        </View>
        <View style={styles.buttonBox}>
          <Button buttonTxt="완료" onPress={handleSignUp} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: "#fff",
  },
  signupBox: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 20,
    gap: 12,
  },
  buttonBox: {
    paddingHorizontal: 20,
    width: "100%",
  },
});
