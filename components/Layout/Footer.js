import styled from "styled-components";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPinterest,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterSection>
      <Flex1>
        <Text>
          <Link href="/">Home</Link>
        </Text>

        <Text>
          <Link href="/about-us">About Us</Link>
        </Text>

        <Text>
          <Link href="mailto:smdsaran@gmail.com">Contact Us</Link>
        </Text>

        <Text>
          <Link href="/rentings">AWC</Link>
        </Text>
      </Flex1>

      <Flex2>
        <Social>
          <a href="#1" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#2" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#3" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#4" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </Social>

        <CopyRight>© 2022 AWC</CopyRight>
      </Flex2>
    </FooterSection>
  );
};

const FooterSection = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #232f3e;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.21);
  margin-top: 25%;
`;

const Flex1 = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 7vh;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Text = styled.p`
  font-size: 1.4 rem;
  font-family: arial, san-serif;
  display: inline;
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 90%;
  }
`;

const Flex2 = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin-top: 15vh;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Social = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2.5vh;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 40%;
    font-size: 16px;
  }
`;

const CopyRight = styled.p`
  font-size: 10px;
  font-family: arial, san-serif;
  width: 10%;
  // position: absolute;
  // top: 70%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  display: inline;
  color: #ffffff;
  margin-top: 2.8vh;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 9px;
    width: 40%;
  }
`;

export default Footer;
