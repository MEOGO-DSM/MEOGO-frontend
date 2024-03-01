import React from "react";
import { styled } from "styled-components";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import Header from "../components/Header.jsx";
import Info from "../components/Info.jsx";
import Recommend from "../components/Recommend.jsx";
import Post from "../components/Post.jsx";
import { color } from "../styles/colors.jsx";
import { fonts } from "../styles/fonts.jsx";
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
            <Text style={fonts.Subtitle["Subtitle 18 SemiBold"]}>
              근처 대학교 추천
            </Text>
            <WrapList></WrapList>
          </Wrap>
        </MainContainer>
      </Container>
      {/*시발 */}
      {/* 
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
  padding: 16px 20px;
  gap: 16;
  background-color: red;
`;

const WrapList = styled.View`
  gap: 12;
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

const styles = StyleSheet.create({
  topbarText: {
    color: "white",
  },
  content: {
    height: "auto", // Set the height of your content
    padding: 20,
    // Add other styles for your content as needed
    backgroundColor: "red",
  },
  box: {
    height: 200,
    width: 200,
    backgroundColor: "blue",
  },
});
