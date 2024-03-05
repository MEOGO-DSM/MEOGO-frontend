import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import { ProfileReview, Star, ReviewImg } from "../../styles/svgs";
import TopBar from "../../components/TopBar";
import { fonts } from "../../styles/fonts";
import { color } from "../../styles/colors"

export default function Review() {
  const scope = ["1", "2", "3", "4", "5"];

  return (
    <Container>
      <FlexWrap>
        <UserInfo>
          <ProfileReview />
          <Text style={{ ...fonts.Body["Body 14 Medium"] }}>어떤 유저</Text>
        </UserInfo>
        <StarWrap>
          {scope.map((value, index) => (
            <Star key={index}  />
          ))}
        </StarWrap>
      </FlexWrap>

      <Text>
        오늘 학교가는 날이다 학교 불 질러야지 나의 꿈은 방화범 아무말 아무말이나
        적기 글자 늘리기 어느정도 
      </Text>

      <ReviewImg style={{width: "333", height: "173"}}/>

      <FlexWrap>
        <Text style={{...fonts.Captions["Captions 12 Medium"], color: color.Gray["500"]}}>대덕소프트웨어마이스터고 진학중</Text>
        <Text style={{...fonts.Captions["Captions 12 Medium"], color: color.Gray["300"]}}>02/19 23:36</Text>
      </FlexWrap>
    
    </Container>
  );
}

const Container = styled.View`
  width: 357px;
  padding: 10px 9px 17px;
  background-color: #fff;
  border-radius: 16px;
  gap: 8px;
`;

const FlexWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const StarWrap = styled.View`
display: flex;
flex-direction: row;
`