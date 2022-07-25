import React from "react";
import styled from "styled-components";
// Components
import Box from "@mui/material/Box";
// Assets
import logoImage from "../assets/logo.svg";

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 25px;
`;

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage: React.FC = () => {
    return (
      <LogoContainer>
        <Logo src={logoImage} />
      </LogoContainer>
    );
}

export default LogoImage;
