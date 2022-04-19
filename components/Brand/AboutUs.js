import styled from "styled-components";

const AboutUs = () => {
  return (
    <Main>
      <Container>
        <Heading>About Us</Heading>
        <AboutPara>
          Hi. We are from the T H R Team. We are providing facility to make your
          house renting process easily. Renting can be possible at anytime
          anywhere.
        </AboutPara>
      </Container>
    </Main>
  );
};

export const Main = styled.main`
  width: 100%;
  height: 60vh;
`;

export const Container = styled.div`
  width: 45%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  background-color: #71bd25;
  border: 0 #71bd25;
  border-radius: 5px;

  @media (max-width: 599px) {
    width: 90%;
  }
`;

const Heading = styled.h2`
  color: #ffffff;
  text-decoration: underline;
  text-align: center;
  padding: 10px;
  margin: 0;
`;

const AboutPara = styled.p`
  font-family: inherit;
  width: 95%;
  height: auto;
  line-height: 40.08px;
  word-spacing: 3px;
  padding: 10px;
  font-size: 16px;
  text-align: left;
  color: #ffffff;
  font-weight: 500;
  margin-left: 1vw;
  margin-top: 0;
  margin-bottom: 0;
`;

export default AboutUs;
