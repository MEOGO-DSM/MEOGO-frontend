import React from "react";
import { styled } from "styled-components";
import Logo from "../public/assets/Logo.svg";
import { Search, Bell, User } from "../styles/svgs";
import { color } from "../styles/colors";

function Header() {
  return (
    <HeaderBox>
      <Logo />
      <InnerContainer>
        <IconBox>
          <Search />
        </IconBox>
        <IconBox>
          <Bell />
        </IconBox>
        <IconBox>
          <Profile />
        </IconBox>
      </InnerContainer>
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.View`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4;
`;

const IconBox = styled.View`
  padding: 8px;
`;

const Profile = styled.View`
  width: 28px;
  height: 28px;
  background-color: ${color.Gray[300]};
  border-radius: 100px;
`;
