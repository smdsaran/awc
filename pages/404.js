import styled from "styled-components";
import AppBar from "../components/Layout/AppBar";
import Footer from "../components/Layout/Footer";

const Page404 = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <Heading>404</Heading>
        <P>Page Not Available.</P>
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: red;
  font-size: 50px;
  margin-right: 10px;
`;

const P = styled.p`
  color: #102a4e;
  font-weight: bold;
`;

export default Page404;
