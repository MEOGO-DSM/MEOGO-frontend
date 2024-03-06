import React, { useEffect, useRef } from "react";
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
  TextInput,
} from "react-native";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { Reset, Search } from "../../styles/svgs";
import Dropdown from "./Dropdown";
import SearchHistoryTag from "./SearchHistoryTag";
import { highschoolCategory, region } from "./Data";

function BottomSheet(props) {
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
              <View style={styles.SchoolClassificationBox}>
                <Pressable style={styles.SchoolClassification}>
                  <Text style={{ ...fonts.Subtitle["Subtitle 18 SemiBold"] }}>
                    중학교
                  </Text>
                </Pressable>
                <Pressable style={styles.SchoolClassification}>
                  <Text style={{ ...fonts.Subtitle["Subtitle 18 SemiBold"] }}>
                    고등학교
                  </Text>
                </Pressable>
                <Pressable style={styles.SchoolClassification}>
                  <Text style={{ ...fonts.Subtitle["Subtitle 18 SemiBold"] }}>
                    대학교
                  </Text>
                </Pressable>
              </View>
              <View style={styles.searchBox}>
                <Search />
                <TextInput
                  style={fonts.Body["Body 16 Regular"]}
                  placeholderTextColor={color.Gray[400]}
                  placeholder="학교 이름을 입력해주세요"
                />
              </View>
              <View style={styles.detailBox}>
                <Text style={{ ...fonts.Action["Link 14"], marginLeft: 4 }}>
                  태그 검색
                </Text>
                <View style={styles.tagBox}>
                  <Dropdown data={region} />
                  <Dropdown data={highschoolCategory} />
                  <Dropdown data={highschoolCategory} />
                </View>
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
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
  SchoolClassificationBox: {
    flexDirection: "row",
    width: "100%",
  },
  SchoolClassification: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  searchBox: {
    width: "100%",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: color.Gray[100],
    borderRadius: 1000,
    alignItems: "center",
    flexDirection: "row",
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
