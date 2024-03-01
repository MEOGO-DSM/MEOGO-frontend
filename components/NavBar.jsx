import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

function NavBar() {
  return <Container></Container>;
}

const Container = styled.View`
  width: ${Dimensions.get("window").width};
`;
