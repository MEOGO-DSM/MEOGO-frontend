import React from "react";
import { styled } from "styled-components";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../components/Header.jsx";
import Info from "../components/Info.jsx";
import Recommend from "../components/Recommend.jsx";
import Post from "../components/Post.jsx";
import { color } from "../styles/colors.jsx";
import { fonts } from "../styles/fonts.jsx";
import { Dimensions } from "react-native";

export default function Main() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container backgroundColor={color.Gray[100]}>
          <Header />

          <Background>
            <Info />
          </Background>

          <Wrap>
            <Text style={fonts.Subtitle["Subtitle 18 SemiBold"]}>
              근처 대학교 추천
            </Text>
            <View
              style={{
                width: Dimensions.get("window").width - 32,
                height: 122,
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Recommend />
                <Recommend />
              </ScrollView>
            </View>
          </Wrap>

          <Wrap>
            <TitleFlex>
              <Text style={fonts.Subtitle["Subtitle 18 SemiBold"]}>
                전체 인기글
              </Text>
              <Text
                style={{
                  ...fonts.Body["Body 14 Medium"],
                  color: color.Blue[600],
                }}
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
      </ScrollView>
    </SafeAreaView>
  );
}

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const Background = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0px 0px 30px 30px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
`;

const Wrap = styled.View`
  margin: 24px 0px 0px;
  gap: 16;
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
  gap: 8;
`;
