import React from "react";
import { styled } from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import Header from "../../components/Header.jsx";
import Info from "./Info.jsx";
import Recommend from "./Recommend.jsx";
import Post from "./Post.jsx";
import { color } from "../../styles/colors.jsx";
import { fonts } from "../../styles/fonts.jsx";
import { Dimensions } from "react-native";
import { MoreArrow } from "../../styles/svgs.jsx";

function Main() {
  return (
    <Container>
      <Header />
      <MainContainer
        contentContainerStyle={{ paddingTop: 72 }}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <MySchoolBox>
          <Info />
        </MySchoolBox>
        <Wrap>
          <Text
            style={{
              ...fonts.Subtitle["Subtitle 18 SemiBold"],
              marginLeft: 24,
            }}
          >
            근처 대학교 추천
          </Text>
          <WrapList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollBox}
          >
            <Recommend />
            <Recommend />
            <Recommend />
          </WrapList>
        </Wrap>
        <Wrap>
          <Title>
            <Text
              style={{
                ...fonts.Subtitle["Subtitle 18 SemiBold"],
              }}
            >
              전체 인기글
            </Text>
            <More>
              <Text
                style={{
                  ...fonts.Action["Link 14"],
                  color: color.Gray[500],
                }}
              >
                더 보기
              </Text>
              <MoreArrow />
            </More>
          </Title>
          <WrapList2>
            <Post />
            <Post />
            <Post />
          </WrapList2>
        </Wrap>
      </MainContainer>
    </Container>
  );
}

export default Main;

const Container = styled.View`
  flex: 1;
  background-color: ${color.Gray[100]};
`;

const MainContainer = styled.ScrollView`
  width: 100%;
`;

const MySchoolBox = styled.View`
  width: 100%;
  padding: 0 20px;
  gap: 4px;
  display: flex;
  background-color: white;
  border-radius: 0px 0px 24px 24px;
`;

const Title = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 24px;
  align-items: flex-end;
`;

const More = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const Wrap = styled.View`
  margin-top: 36px;
  gap: 16;
  padding: 16px 0;
`;

const WrapList = styled.ScrollView`
  padding: 0 20px;
  flex-direction: row;
`;

const WrapList2 = styled.View`
  width: "100%";
  gap: 12px;
  padding: 0 20px;
`;

const styles = StyleSheet.create({
  scrollBox: {
    paddingRight: 40,
  },
});
