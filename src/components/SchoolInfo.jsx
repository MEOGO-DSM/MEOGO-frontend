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
} from "../../styles/svgs";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

function SchoolInfo() {
  const bar = [
    { logo: Info, name: "정보" },
    { logo: Review, name: "리뷰" },
    { logo: CommunityBoard, name: "커뮤니티" },
    { logo: HomePage, name: "홈페이지" },
    { logo: Map, name: "지도" },
  ];

  return (
    <View>
      <Container>
        <AlertBox>
          <Alert />
          <Text
            style={{ ...fonts.Body["Body 14 Medium"], color: color.Gray[500] }}
          >
            자신의 학교에 리뷰를 남겨보세요
          </Text>
        </AlertBox>

        <InfoBox backgroundColor={color.Blue[600]}>
          <School />
          <SchoolDetails>
            <Text
              style={{
                ...fonts.Subtitle["Subtitle 18 Bold"],
                color: color.White,
              }}
            >
              대덕소프트웨어마이스터고
            </Text>
            <Text
              style={{
                ...fonts.Body["Body 14 Regular"],
                color: color.Blue[100],
              }}
            >
              특목고 - 대전광역시
            </Text>
          </SchoolDetails>
          <Arrow_Small_Right />
        </InfoBox>

        <Contents>
          {bar.map((item, index) => {
            const LogoComponent = item.logo;
            return (
              <Icons key={index}>
                <LogoComponent />
                <Name>{item.name}</Name>
              </Icons>
            );
          })}
        </Contents>
      </Container>
    </View>
  );
}

export default SchoolInfo;

const Container = styled.View``;

const AlertBox = styled.View`
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
`;

const InfoBox = styled.View`
  width: 357px;
  height: 74px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  padding: 0px 16px;
  border-radius: 8px;
`;

const SchoolDetails = styled.View`
  width: 237px;
  height: 42px;
`;

const Contents = styled.View`
  display: flex;
  width: 357px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 16px 6px 24px;
`;

const Icons = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.Text`
  margin: 8px 0px;
`;
