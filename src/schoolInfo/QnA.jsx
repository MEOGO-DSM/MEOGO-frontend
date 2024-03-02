import React, { useState } from "react";
import styled from "styled-components";
import {Text} from "react-native"
import {QIcon_Amber, QIcon_Blue} from "../../styles/svgs"
import { color } from "../../styles/colors.jsx";
import { fonts } from "../../styles/fonts.jsx";

export default function QnA({ value, selected }) {

return (

    <Container selected={selected}>
      {selected === "Amber" ? <QIcon_Amber /> : <QIcon_Blue />}
      <Content>
        <Text style={{ ...fonts.Subtitle["Subtitle 14 SemiBold"]}}>{value.title}</Text>
        <Text style={{ ...fonts.Body["Body 14 Regular"]}}>대덕 소프트웨어 마이스터고에 가는 것이 좋을까요?</Text>
      </Content>
    </Container>
  );
}

const Container = styled.View`
width: 200px;
height: 118px;
margin-right: 10px;
padding: 16px;
gap: 12px;
background-color: ${({ selected }) => color[selected][50]}; 
border-color: ${({ selected }) => color[selected][200]};
border-width: 1px;
border-radius: 16px;
`

const Content = styled.View`
width: 168px;
height: 58px;
gap: 4px;
`
