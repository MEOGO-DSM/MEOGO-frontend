import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import { color } from "./styles/colors";
import { fonts } from "./styles/fonts";
import * as svgs from "./styles/svgs";

function WhatIsSvg() {
  const [modalVisible, setModalVisible] = useState(false);
  const renderSvgButtons = () => {
    return Object.keys(svgs).map((svgName) => {
      const SvgComponent = svgs[svgName];
      return (
        <View key={svgName} style={styles.iconBox}>
          <View style={styles.icon}>
            <SvgComponent width={40} />
          </View>
          <Text
            style={{ ...fonts.Action["Button 14"], color: color.Gray[600] }}
          >
            {svgName}
          </Text>
        </View>
      );
    });
  };

  return (
    <>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.closeBox}>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <svgs.Close />
              </Pressable>
            </View>
            <ScrollView
              contentContainerStyle={styles.svgBox}
              horizontal={false}
            >
              {renderSvgButtons()}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button]} onPress={() => setModalVisible(true)}>
        <Text style={{ ...fonts.Action["Link 14"], color: color.Blue[600] }}>
          SVG
        </Text>
      </Pressable>
    </>
  );
}

export default WhatIsSvg;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: color.Blue[100],
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  modalContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 3,
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60,
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  closeBox: {
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 16,
  },
  closeButton: {
    backgroundColor: color.Gray[100],
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 100,
  },
  modalView: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  svgBox: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 16,
  },
  iconBox: {
    width: 100,
    height: 80,
    alignItems: "center",
    marginBottom: 8,
  },

  icon: {
    height: 48,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
