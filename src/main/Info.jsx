import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import {
  Alert,
  Arrow_Small_Right,
  CommunityBoard,
  HomePage,
  Info,
  Map,
  Review,
  School,
  Spot,
} from "../../styles/svgs.jsx";
import { color } from "../../styles/colors.jsx";
import { fonts } from "../../styles/fonts.jsx";

export default function SchoolInfo() {
  const bar = [
    { logo: Info, name: "정보" },
    { logo: Review, name: "리뷰" },
    { logo: CommunityBoard, name: "커뮤니티" },
    { logo: HomePage, name: "홈페이지" },
    { logo: Map, name: "지도" },
  ];

  return (
    <>
      <AlertBox>
        <Alert />
        <Text
          style={{ ...fonts.Body["Body 14 Medium"], color: color.Gray[500] }}
        >
          자신의 학교에 리뷰를 남겨보세요
        </Text>
      </AlertBox>

      <InfoBox>
        <School />
        <SchoolDetails>
          <Text
            style={{
              ...fonts.Subtitle["Subtitle 16 SemiBold"],
              color: color.White,
              width: "100%",
              marginBottom: 2,
            }}
          >
            대덕소프트웨어마이스터고
          </Text>
          <SchoolGroup>
            <Text
              style={{
                ...fonts.Body["Body 14 Regular"],
                color: color.Blue[100],
              }}
            >
              특목고
            </Text>
            <Spot />
            <Text
              style={{
                ...fonts.Body["Body 14 Regular"],
                color: color.Blue[100],
              }}
            >
              대전광역시
            </Text>
          </SchoolGroup>
        </SchoolDetails>
        <Arrow_Small_Right />
      </InfoBox>

      <Contents>
        {bar.map((item, index) => (
          <Icons key={index}>
            <item.logo />
            <Name style={fonts.Body["Body 14 Regular"]}>{item.name}</Name>
          </Icons>
        ))}
      </Contents>
    </>
  );
}

const AlertBox = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 8px 4px;
  align-items: center;
`;

const InfoBox = styled.View`
  background-color: ${color.Blue[600]};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12;
  padding: 16px;
  border-radius: 12px;
`;

const SchoolGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SchoolDetails = styled.View`
  flex: 1;
`;

const Contents = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px 6px 24px;
`;

const Icons = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Name = styled.Text`
  margin-top: 8px;
`;
