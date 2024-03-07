import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
  Pressable,
} from "react-native";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { Reset, Search } from "../../styles/svgs";
import Dropdown from "./Dropdown";
import SearchHistoryTag from "./SearchHistoryTag";
import { highSchoolCategory, region } from "./Data";
import SearchInput from "./SearchInput";

function BottomSheet(props) {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const { modalVisible, setModalVisible } = props;
  const screenHeight = Dimensions.get("screen").height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          resetBottomSheet.start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (props.modalVisible) {
      resetBottomSheet.start();
    }
  }, [props.modalVisible]);

  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };

  //학교 분류 선택
  const [selectSchool, setSelectSchool] = useState("고등학교");

  const selectStyle = (school) => {
    setSelectSchool(school);
  };

  const grade = ["중학교", "고등학교", "대학교"];

  return (
    <Modal
      visible={modalVisible}
      animationType={"fade"}
      transparent
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...styles.bottomSheetContainer,
            transform: [{ translateY: translateY }],
          }}
          {...panResponders.panHandlers}
        >
          <View style={styles.searchContainer}>
            <View style={styles.bar} />
            <View style={styles.box}>
              <View style={styles.classificationBox}>
                {grade.map((i, j) => (
                  <Pressable
                    key={j}
                    style={
                      selectSchool === i
                        ? styles.selectClassification
                        : styles.classification
                    }
                    onPress={() => selectStyle(i)}
                  >
                    <Text
                      style={{
                        ...fonts.Subtitle["Subtitle 18 SemiBold"],
                        color:
                          selectSchool === i ? color.Blue[600] : color.Black,
                      }}
                    >
                      {i}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <SearchInput />
              <View style={styles.detailBox}>
                <Text style={{ ...fonts.Action["Link 14"], marginLeft: 4 }}>
                  태그 검색
                </Text>
                <View style={styles.tagBox}>{/* <Dropdown /> */}</View>
              </View>
              <View style={styles.detailBox}>
                <View style={styles.searchHistory}>
                  <Text style={fonts.Action["Link 14"]}>검색 기록</Text>
                  <Text
                    style={{
                      ...fonts.Action["Link 14"],
                      color: color.Blue[600],
                    }}
                  >
                    모두 지우기
                  </Text>
                </View>
                <View style={styles.historyBox}>
                  <SearchHistoryTag />
                  <SearchHistoryTag />
                  <SearchHistoryTag />
                  <SearchHistoryTag />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <View style={styles.resetButton}>
              <Reset />
              <Text style={fonts.Body["Body 14 Medium"]}>태그 초기화</Text>
            </View>
            <View style={styles.button}>
              <Text
                style={{
                  ...fonts.Subtitle["Subtitle 18 SemiBold"],
                  color: color.White,
                }}
              >
                28
              </Text>
              <Text
                style={{
                  ...fonts.Subtitle["Subtitle 18 Medium"],
                  color: color.White,
                }}
              >
                개의 학교보기
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    height: 600,
    maxHeight: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
  },
  searchContainer: {
    position: "absolute",
    bottom: 0,
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: color.White,
    alignItems: "center",

    borderTopLeftRadius: 32,
    borderTopRightRadius: 10,
  },
  bar: {
    width: 48,
    height: 4,
    borderRadius: 100,
    backgroundColor: color.Gray[200],
  },
  box: {
    width: "100%",
    gap: 16,
    paddingVertical: 16,
  },
  classificationBox: {
    flexDirection: "row",
    width: "100%",
  },
  classification: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderColor: "transparent",
  },
  selectClassification: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderColor: color.Blue[600],
  },
  detailBox: {
    width: "100%",
    padding: 8,
    gap: 8,
  },
  searchHistoryBox: {
    paddingHorizontal: 4,
    justifyContent: "space-between",
  },
  tagBox: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
  buttonBox: {
    backgroundColor: color.White,
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingVertical: 8,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },
  resetButton: {
    padding: 10,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 42,
    paddingVertical: 14,
    flexDirection: "row",
    backgroundColor: color.Blue[600],
    borderRadius: 8,
  },
  searchHistory: {
    paddingHorizontal: 4,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  historyBox: {
    gap: 12,
    width: "100%",
  },
});

export default BottomSheet;
