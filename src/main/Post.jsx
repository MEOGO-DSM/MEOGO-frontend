import React from "react";
import { styled } from "styled-components";
import { Text, View } from "react-native";
import { PostProfile, Like, Chat } from "../../styles/svgs";
import { color } from "../../styles/colors.jsx";
import { fonts } from "../../styles/fonts.jsx";

export default function Post() {
  return (
    <Container>
      <InfoBox>
        <UserInfo>
          <PostProfile />
          <Text style={fonts.Body["Body 14 Medium"]}>익명</Text>
        </UserInfo>
        <Text
          style={{
            ...fonts.Captions["Captions 12 Medium"],
            color: color.Gray[300],
          }}
        >
          02/19 23:00
        </Text>
      </InfoBox>

      <Contents>
        <Text style={fonts.Subtitle["Subtitle 14 SemiBold"]}>아진짜대마고</Text>
        <Text style={fonts.Body["Body 14 SemiBold"]}>폭발시켜버릴거다</Text>
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
  );
}

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  gap: 8;
`;

const InfoBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const Contents = styled.View`
  display: flex;
  gap: 2px;
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
  gap: 4px;
`;
