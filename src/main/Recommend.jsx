import React from "react";
import { styled } from "styled-components";
import { Text, View } from "react-native";
import { Dadeock, BookMark, StyledStar } from "../../styles/svgs.jsx";
import { color } from "../../styles/colors.jsx";
import { fonts } from "../../styles/fonts.jsx";

export default function RecommendBox() {
  return (
    <View>
      <Container>
        <InfoFlex>
          <Info>
            <Dadeock />
            <Text style={fonts.Subtitle["Subtitle 16 SemiBold"]}>
              대덕대학교
            </Text>
          </Info>
          <BookMark />
        </InfoFlex>
        <Text
          style={{ ...fonts.Body["Body 14 Regular"], color: color.Gray[500] }}
        >
          대전 유성구 장동
        </Text>
        <ReviewWrap>
          <StyledStar />
          <Text
            style={{ ...fonts.Body["Body 16 Medium"], color: color.Gray[600] }}
          >
            2.5
          </Text>
          <Text
            style={{
              ...fonts.Captions["Captions 14 Regular"],
              color: color.Gray[400],
            }}
          >
            (274)
          </Text>
        </ReviewWrap>
      </Container>
    </View>
  );
}

const Container = styled.View`
  width: 233px;
  height: 122px;
  margin-right: 12px;
  padding: 16px;
  background-color: white;
  border-radius: 12px;
  gap: 6;
`;

const InfoFlex = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6;
`;

const ReviewWrap = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4;
`;
