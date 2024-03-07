import { useState } from "react";
import { styled } from "styled-components";
import Logo from "../public/assets/Logo.svg";
import { Search, Bell } from "../styles/svgs";
import { color } from "../styles/colors";
import BottomSheet from "../src/search/BottomSheet";

function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const pressButton = () => {
    setModalVisible(true);
  };
  return (
    <HeaderBox>
      <Logo />
      <InnerContainer>
        <IconBox>
          <Search onPress={pressButton} />
          <BottomSheet
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
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
  gap: 4px;
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
