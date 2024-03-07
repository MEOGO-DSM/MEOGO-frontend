import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import { Close } from "../../styles/svgs";
import { fonts } from "../../styles/fonts";
import { color } from "../../styles/colors";
import InputBox from "../../components/InputBox";

function WritePost() {
  const [isEnabled, setISEnabled] = useState(false);
  const toggleSwitch = () => setISEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Close />
        <Text style={fonts.Subtitle["Subtitle 18 SemiBold"]}>글쓰기</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ ...fonts.Action["Link 14"], color: color.White }}>
            등록
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <InputBox inputTitle="제목" placeholder="최대 30자" maxLength={30} />
        <InputBox
          inputTitle="내용"
          placeholder={`최대 300자\n\n\n\n\n\n\n\n`}
          maxLength={300}
          multiline={true}
        />
        <View style={styles.schoolNameVisible}>
          <Text style={fonts.Body["Body 16 Medium"]}>내 학교명 공개</Text>
          <Switch
            trackColor={{ false: color.Gray[200], true: color.Blue[500] }}
            thumbColor={color.White}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}
export default WritePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: color.Blue[400],
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 10,
  },
  schoolNameVisible: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
