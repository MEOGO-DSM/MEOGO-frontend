import React from "react";
import { styled } from "styled-components";
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
} from "../styles/svgs";
import { color } from "../styles/colors.jsx";
import { fonts } from "../styles/fonts.jsx";

export default function SchoolInfo() {
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
          <Icon>
            <Info />
            <Caption>정보</Caption>
          </Icon>
          <Icon>
            <Review />
            <Caption>리뷰</Caption>
          </Icon>
          <Icon>
            <CommunityBoard />
            <Caption>커뮤니티</Caption>
          </Icon>
          <Icon>
            <HomePage />
            <Caption>홈페이지</Caption>
          </Icon>
          <Icon>
            <Map />
            <Caption>지도</Caption>
          </Icon>
        </Contents>
      </Container>
    </View>
  );
}

const Container = styled.View`
  margin: 0px 25px;
`;

const AlertBox = styled.View`
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
  gap: 12;
  margin: 0px 4px;
  padding: 0px 16px;
  border-radius: 8px;
`;

const SchoolDetails = styled.View`
  width: 237px;
`;

const Contents = styled.View`
  display: flex;
  width: 357px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 16px 6px 24px;
`;

const Icon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Caption = styled.Text`
  margin: 8px 0px;
`;
