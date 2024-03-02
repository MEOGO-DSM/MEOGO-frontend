import { useState } from "react";
import { styled } from "styled-components/native";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { SchoolImg, BookMark } from "../../styles/svgs";
import { color } from "../../styles/colors.jsx";
import { fonts } from "../../styles/fonts.jsx";
import QnA from "../schoolInfo/QnA";
import TopBar from "../../components/TopBar";

export default function SchoolInfo() {
  const [bookMark, setBookMark] = useState(false);

  const toggleBookMark = () => {
    setBookMark(!bookMark);
  };

  return (
    <Container>
    <TopBar text="대덕소프트웨어마이스터고"/>
      <Info>
        <SchoolImg styles={{ width: 357, height: 240, borderRadius: 16 }} />
        <Title>
          <Text style={{ ...fonts.Titles["Title 24 SemiBold"] }}>
            대덕소프트웨어마이스터고
          </Text>
          <TouchableOpacity onPress={toggleBookMark}>
            <BookMark fill={bookMark ? color.Blue[500] : "none"} />
          </TouchableOpacity>
        </Title>

        <TagWrapper>
          <Tag>특목고</Tag>
          <Tag>마이스터고</Tag>
        </TagWrapper>
      </Info>

      <Wrap
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollBox}
      >
        <QnA />
        <QnA />
      </Wrap>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const Info = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 16px;
`;

const Title = styled.View`
  width: 357px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TagWrapper = styled.View`
  width: 357px;
  flex-direction: row;
  gap: 4px;
`;

const Tag = styled.Text`
  background-color: ${color.Gray["100"]};
  border-radius: 4px;
  padding: 8px 10px;
`;

const Wrap = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 8px 20px;
`;

const styles = StyleSheet.create({
  scrollBox: {
    paddingRight: 40,
  },
});
