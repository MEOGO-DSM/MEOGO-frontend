import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { Search } from "../../styles/svgs";
import Dropdown from "./Dropdown";

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
              <Dropdown data={regionData} title={regionData} />
              <Dropdown data={regionData} title={regionData} />
              <Dropdown data={regionData} title={regionData} />
            </View>
          </View>
          <View style={styles.detailBox}>
            <View style={styles.searchHistory}></View>
            <Text style={{ ...fonts.Action["Link 14"], marginLeft: 4 }}>
              검색 기록
            </Text>
            <View style={styles.tagBox}>
              <Dropdown data={regionData} title={regionData} />
              <Dropdown data={regionData} title={regionData} />
              <Dropdown data={regionData} title={regionData} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Black,
    zIndex: 4,
    paddingTop: 100,
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
});
