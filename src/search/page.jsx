import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

function SearchPage() {
  const [region, setRegion] = useState("");
  const [sch1, setSch1] = useState("");
  const [sch2, setSch2] = useState("");
  const [searchSchulNm, setSearchSchulNm] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.get(
          "//www.career.go.kr/cnet/openapi/getOpenApi.xml?apiKey=963235c8e241a84fea61f23ab039ff42",
          {
            params: {
              apiKey: "963235c8e241a84fea61f23ab039ff42",
              svcType: "api",
              svcCode: "SCHOOL",
              contentType: "Json",
              gubun: "고등학교",
              region: `${region}`,
              sch1: `${sch1}`,
              sch2: `${sch2}`,
              searchSchulNm: `${searchSchulNm}`,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data.massage);
      }
    };
    handleSearch();
  }, [region, sch1, sch2, searchSchulNm]);

  return (
    <View style={styles.container}>
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
          <View style={styles.searchBox}></View>
        </View>
      </View>
    </View>
  );
}

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: (0, 0, 0, 0.2),
    position: "absolute",
    top: 0,
    zIndex: 4,
  },
  searchContainer: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width,
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
  },
  searchBox: {
    width: "100%",
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
});
