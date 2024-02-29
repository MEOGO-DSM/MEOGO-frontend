import { useState } from "react";
import { StyleSheet, Text, Touchable, View } from "react-native";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import TopBar from "../../components/TopBar";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [password2, setPassword2] = useState("");

  const PasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  const PasswordVisibility2 = () => {
    setPasswordVisible2((prevVisible) => !prevVisible);
  };

  return (
    <View style={styles.container}>
      <TopBar text="회원가입" />
      <View style={styles.signupBox}>
        <InputBox inputTitle="이름" placeholder="이름" maxLength={4} />
        <InputBox
          inputTitle="아이디"
          placeholder="최소 5자, 최대 15자"
          maxLength={15}
        />
        <InputBox
          inputTitle="비밀번호"
          placeholder="특수문자 1자 이상, 최대 20자"
          maxLength={20}
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={(text) => setPassword(text)}
          onEyePress={PasswordVisibility}
        />
        <InputBox
          inputTitle="비밀번호 확인"
          placeholder="비밀번호"
          maxLength={4}
          secureTextEntry={!passwordVisible2}
          value={password2}
          onChangeText={(text) => setPassword2(text)}
          onEyePress={PasswordVisibility2}
        />
      </View>
      <View style={styles.buttonBox}>
        <Button buttonTxt="완료" />
      </View>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
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
