import React from "react";
import styled from "styled-components";
import { View, Text, ScrollView } from "react-native";
import { Filter, SchoolImg, Star } from "../../styles/svgs";
import TopBar from "../../components/TopBar";
import Button from "./Button.jsx"
import Review from "./Review.jsx";
import { fonts } from "../../styles/fonts";
import { color } from "../../styles/colors";

export default function SchoolReview() {
  const scope = ["1", "2", "3", "4", "5"];

  const data = [
    { name: "교육만족도", percent: "90" },
    { name: "교내활동", percent: "70" },
    { name: "교내시설", percent: "20" },
  ];

  return (
    <Container>
      <InnerContainer>
        <ScrollView stickyHeaderIndices={[0]}>
          <TopBar style={{backgroundColor: "#fff"}}/>
          <Wrap>
            <TotalWrap>
              <ScopeWrap>
                <Text style={{ ...fonts.Titles["Title 36 SemiBold"] }}>
                  4.8
                </Text>
                <StarWrap>
                  {scope.map((value, index) => (
                    <Star key={index} />
                  ))}
                </StarWrap>
              </ScopeWrap>

              <RatioWrap>
                {data.map((value, index) => (
                  <Flex>
                    <Text
                      style={{
                        ...fonts.Captions["Captions 12 Medium"],
                        color: color.Gray["400"],
                      }}
                    >
                      {value.name}
                    </Text>
                    <Graph></Graph>
                    <Text
                      style={{
                        ...fonts.Captions["Captions 12 Medium"],
                        color: color.Gray["600"],
                      }}
                    >
                      {value.percent}%
                    </Text>
                  </Flex>
                ))}
              </RatioWrap>
            </TotalWrap>

            <WriteWrap>
              <Text style={{ ...fonts.Captions["Captions 12 Medium"], color: color.Gray["400"] }}>
                이 학교에 재학중이신가요? {"\n"}
                신입생을 위한 솔직한 학교 리뷰를 작성해주세요!
              </Text>
              <Button/>
            </WriteWrap>
          </Wrap>

          <Contents>
            <Subject>
              <Title>
                <Text style={{ ...fonts.Subtitle["Subtitle 16 SemiBold"] }}>
                  리뷰
                </Text>
                <Text
                  style={{
                    ...fonts.Subtitle["Subtitle 16 SemiBold"],
                    color: color.Blue["800"],
                  }}
                >
                  31개의 리뷰
                </Text>
              </Title>
              <Filter style={{ color: color.Gray["400"] }} />
            </Subject>
            
            <ReviewWrap>
              <Review />
              <Review />
              <Review />
            </ReviewWrap>
          </Contents>
        </ScrollView>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${color.Gray["50"]};
`;

const InnerContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const Wrap = styled.View`
  width: 100%;
  height: 158px;
  padding: 9px 16px;
  gap: 20px;
  background-color: #fff;
`;

const TotalWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 16px;
  gap: 25px;
`;

const ScopeWrap = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarWrap = styled.View`
  display: flex;
  flex-direction: row;
`;

const Flex = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
`;

const RatioWrap = styled.View`
  gap: 8px;
`;

const Graph = styled.View`
  width: 111px;
  height: 5px;
  background-color: ${color.Blue[300]};
  border-radius: 20px;
`;

const WriteWrap = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const Contents = styled.View`
  padding: 9px 16px;
  gap: 20px;
`;

const Subject = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 6px 0px;
`;

const Title = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const ReviewWrap = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
