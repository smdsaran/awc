import Appbar from "../Layout/AppBar";
import Footer from "../Layout/Footer";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Appbar />
      <Main></Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

export default Home;
