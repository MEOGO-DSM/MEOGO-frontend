import React, { useState } from "react";
import { styled } from "styled-components/native";
import { Text, View, TouchableOpacity } from "react-native";
import { BookMark, StyledStar } from "../../styles/svgs.jsx";
import { color } from "../../styles/colors.jsx";
import { fonts } from "../../styles/fonts.jsx";

export default function Recommend() {
  const [bookMark, setBookMark] = useState(false);

  const toggleBookMark = () => {
    setBookMark(!bookMark);
  };

  return (
    <Container>
      <SchoolInfoBox>
        <TitleBox>
          <SchoolLogo />
          <Text style={fonts.Subtitle["Subtitle 16 SemiBold"]}>충남대학교</Text>
        </TitleBox>
        <Text
          style={{ ...fonts.Body["Body 14 Regular"], color: color.Gray[500] }}
        >
          대전 유성구 궁동
        </Text>
        <ScopeBox>
          <StyledStar />
          <Text
            style={{ ...fonts.Body["Body 16 Medium"], color: color.Gray[600] }}
          >
            4.0
          </Text>
          <Text
            style={{
              ...fonts.Captions["Captions 12 Medium"],
              color: color.Gray[400],
            }}
          >
            (274)
          </Text>
        </ScopeBox>
      </SchoolInfoBox>
      <TouchableOpacity onPress={toggleBookMark}>
        <BookMark fill={bookMark ? color.Blue[500] : "none"} />
      </TouchableOpacity>
    </Container>
  );
}

const Container = styled.View`
  margin-right: 12px;
  width: 230px;
  padding: 20px;
  background-color: ${color.White};
  border-radius: 12px;
  flex-direction: row;
`;

const SchoolInfoBox = styled.View`
  flex: 1;
  gap: 8px;
`;

const TitleBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SchoolLogo = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  margin-right: 8px;
  border-width: 1px;
  border-color: ${color.Gray[200]};
`;

const ScopeBox = styled.View`
  display: flex;
  gap: 6px;
  align-items: center;
  flex-direction: row;
`;
