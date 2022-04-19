import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const TopAppBar = () => {
  const [toggle, setToggle] = useState(false);

  const hamburgerIconHAndler = () => {
    setToggle(!toggle);
  };

  return (
    <AppBar>
      <Anchor href="/">
        {/* <Picture>
          <source
            media="(max-width: 599px)"
            srcSet="/assets/logo-reviewsman.png"
          />
          <img src="/assets/logo-reviewsmanpc.png" alt="reviewsman-logo" />
        </Picture> */}
        <ProjectName>AWC-Easy</ProjectName>
      </Anchor>

      <MenuPC>
        <Button long>
          <Link href="/">For AWW Login</Link>
        </Button>
      </MenuPC>

      {!toggle && (
        <IcomButton onClick={hamburgerIconHAndler}>
          <FontAwesomeIcon icon={faBars} />
        </IcomButton>
      )}
      {toggle && (
        <IcomButton onClick={hamburgerIconHAndler}>
          <FontAwesomeIcon icon={faXmark} />
        </IcomButton>
      )}

      {toggle && (
        <Menu>
          <Li>
            <Link href="/">For AWW Login</Link>
          </Li>
        </Menu>
      )}
    </AppBar>
  );
};

// const Logo = styled.div`
//   width: 50%;
//   height: 90%;
//   margin-left: 3%;
//   margin-top: 1vh;
// `;

// const BGColor = styled.div`
//   background-color: #ffffff;
//   width: 100%;
//   height: 10vh;
//   border: 1px solid rgba(0, 0, 0, 0.29);
// `;

const AppBar = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #ffffff;
  box-shadow: 0 8px 6px -6px grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 799px) {
    justify-content: space-between;
  }
`;

const Anchor = styled.a`
  width: 50%;
  margin: 0;
  padding: 0;
`;

const Picture = styled.picture`
  width: 50%;
  height: auto;
  margin-left: 2.5vw;
`;

const ProjectName = styled.h1`
  width: 50%;
  color: #0036c7;
  margin-left: 2.5vw;

  @media (max-width: 799px) {
    font-size: 16px;
    width: 100%;
    margin-left: 5vw;
  }
`;

const MenuPC = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  float: right;

  @media (max-width: 799px) {
    display: none;
  }
`;

const IcomButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  background-color: #ffffff;
  margin: 4vw;
  font-size: 20px;

  @media (min-width: 799px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 70%;
  color: #1a0640;
  background-color: #ffffff;
  border: none;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #2e5fe1;
    color: white;
  }
`;

const Menu = styled.div`
  width: 100%;
  height: auto;
  display: block;
  background-color: #0a64f7;
  position: absolute;
  left: 0;
  top: 10vh;
  border-top: 1px solid grey;
  transition: all 0.5s ease-in 0.3s;

  @media (min-width: 799px) {
    display: none;
  }
`;

const Li = styled.p`
  width: 100%;
  text-align: center;
  padding: 20px;
  color: #ffffff;
  font-weight: 500;
`;

const Img = styled.img``;
export default TopAppBar;
