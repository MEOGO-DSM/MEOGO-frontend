import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { PostProfile, Like, Chat } from "../../styles/svgs";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

function Post() {
  return (
    <View>
      <Container>
        <Info>
          <UserInfo>
            <PostProfile />
            <Text style={fonts.Captions["Captions 12 Medium"]}>익명</Text>
          </UserInfo>
          <Text
            style={{
              ...fonts.Captions["Captions 12 Medium"],
              color: color.Gray[300],
            }}
          >
            02/19 23:00
          </Text>
        </Info>

        <Contents>
          <Text style={fonts.Subtitle["Subtitle 14px SemiBold"]}>
            아진짜대마고
          </Text>
          <Text>폭발시켜버릴거다</Text>
        </Contents>

        <Footer>
          <Text
            style={{
              ...fonts.Captions["Captions 12 Medium"],
              color: color.Gray[400],
            }}
          >
            대마고 게시판
          </Text>
          <CommentLikeBox>
            <IconFlex>
              <Like />
              <Text
                style={{
                  ...fonts.Captions["Captions 12 Medium"],
                  color: color.Gray[400],
                }}
              >
                21
              </Text>
            </IconFlex>
            <IconFlex>
              <Chat />
              <Text
                style={{
                  ...fonts.Captions["Captions 12 Medium"],
                  color: color.Gray[400],
                }}
              >
                21
              </Text>
            </IconFlex>
          </CommentLikeBox>
        </Footer>
      </Container>
    </View>
  );
}
export default Post;

const Container = styled.View`
  width: 357px;
  height: 112px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 12px;
  gap: 8px;
`;

const Info = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const Contents = styled.View`
  display: flex;
  gap: 4px;
`;

const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CommentLikeBox = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const IconFlex = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
