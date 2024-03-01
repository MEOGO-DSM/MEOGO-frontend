import React from "react";
import { styled } from "styled-components/native";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import Header from "../../components/Header.jsx";
import Info from "./Info.jsx";
import Recommend from "./Recommend.jsx";
import Post from "./Post.jsx";
import { color } from "../../styles/colors.jsx";
import { fonts } from "../../styles/fonts.jsx";
import { Dimensions } from "react-native";

function Main() {
  return (
    <>
      <Container>
        <Header />
        <MainContainer
          contentContainerStyle={{ paddingTop: 88 }}
          stickyHeaderIndices={[0]}
        >
          <MySchoolBox>
            <Info />
          </MySchoolBox>
          <Wrap>
            <Text
              style={{
                ...fonts.Subtitle["Subtitle 18 SemiBold"],
                marginLeft: 16,
              }}
            >
              근처 대학교 추천
            </Text>
            <WrapList horizontal={true} showsHorizontalScrollIndicator={false}>
              <Recommend />
              <Recommend />
              <Recommend />
            </WrapList>
          </Wrap>
        </MainContainer>
      </Container>
      {/*시발 */}
      {/* 
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
        </Container>
      </SafeAreaView> */}
    </>
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
  height: auto;
  width: 100%;
  padding: 0 16px;
  gap: 4px;
  display: flex;
  background-color: white;
  border-radius: 0px 0px 24px 24px;
`;

const Wrap = styled.View`
  margin-top: 36px;
  gap: 16;
  background-color: red;
  padding: 16px 0;
`;

const WrapList = styled.ScrollView`
  padding: 0 16px;
  flex-direction: row;
  background-color: blue;
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
