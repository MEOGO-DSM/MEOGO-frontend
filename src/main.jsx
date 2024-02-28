import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import Header from "./components/Header";
import SchoolInfo from "./components/SchoolInfo";
import RecommendBox from "./components/Recommend";
import Post from "./components/Post";
import { color } from "../styles/colors";
import { fonts } from "../styles/fonts";

export default function Main() {
  return (
    <Container backgroundColor={color.Gray[100]}>
      <Background>
        <Header />
        <SchoolInfo />
      </Background>

      <Wrap>
        <Text style={fonts.Subtitle["Subtitle 18 SemiBold"]}>
          근처 대학교 추천
        </Text>
        <HorizontalScroll>
          <RecommendBox />
          <RecommendBox />
        </HorizontalScroll>
      </Wrap>

      <Wrap>
        <TitleFlex>
          <Text style={fonts.Subtitle["Subtitle 18 SemiBold"]}>
            전체 인기글
          </Text>
          <Text
            style={{ ...fonts.Body["Body 14 Medium"], color: color.Blue[600] }}
          >
            더보기
          </Text>
        </TitleFlex>
        <PostWrap>
          <Post />
          <Post />
          <Post />
        </PostWrap>
      </Wrap>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
`;

const Wrap = styled.View`
  margin: 24px 0px 0px;
  gap: 16px;
`;

const HorizontalScroll = styled.View`
  width: 357px;
  height: 122px;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const TitleFlex = styled.View`
  display: flex;
  width: 357px;
  flex-direction: row;
  justify-content: space-between;
`;

const PostWrap = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
