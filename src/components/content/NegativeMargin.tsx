import styled from '@emotion/styled';
import { Container } from '../core/Content';
import HamburgerImg1 from '../../assets/images/hamburger1.png';
import HamburgerImg2 from '../../assets/images/hamburger2.png';
import HamburgerImg3 from '../../assets/images/hamburger3.png';

const Box = styled.div`
  background-color: white;
  width: 600px;
  margin: 300px auto 0;
  text-align: center;
  border-radius: 20px;
  border-right: 5px solid #ccc;
  border-bottom: 5px solid #eee;

  & > h1 {
    color: orangered;
    border-bottom: 10px solid orangered;
    width: 350px;
    margin: 40px auto;
    font-size: 4rem;
  }

  & > p {
    padding: 3rem;
  }
`;

const ImageWrap = styled.div`
  display: flex;

  & > img {
    width: 300px;
    height: 300px;
    margin-top: -200px;
    margin-bottom: -40px;
    margin-right: -150px;
  }
`;

export default function NegativeMargin() {
  return (
    <Container>
      <Box>
        <ImageWrap>
          <img src={HamburgerImg1} />
          <img src={HamburgerImg2} />
          <img src={HamburgerImg3} />
        </ImageWrap>
        <h1>Hamburger</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </Box>
    </Container>
  );
}
