import React from "react";
import { styled } from "styled-components";
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
  width: 100%;
  display: flex;
  background-color: white;
`;

const HeaderBox = styled.View`
  width: 100%;
  padding: 16px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 15px;
  gap: 20;
`;
