import React from "react";
import { styled } from "styled-components";
import { Dimensions, Text, View } from "react-native";
import Logo from "../public/assets/Logo.svg";
import { Search, Bell, User } from "../styles/svgs";

function Header() {
  return (
      <Container>
        <HeaderBox>
          <Logo />
          <InnerContainer>
            <Search />
            <Bell />
            <User />
          </InnerContainer>
        </HeaderBox>
      </Container>
  );
}

export default Header;

const Container = styled.View`
  display: flex;
  background-color: white;
`;

const HeaderBox = styled.View`
  width: 100%;
  padding: 9px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0px 15px;
  gap: 20;
`;
