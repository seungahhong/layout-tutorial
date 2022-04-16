import styled from '@emotion/styled';
import { Container as ContainerCore } from '../core/Content';

const Container = styled(ContainerCore)`
  width: calc(100vw - 200px);
`;

const Header = styled.header`
  height: 100px;
  background-color: black;
`;

const Main = styled.main`
  &:after {
    display: block;
    clear: both;
    content: '';
  }
`;

const Nav = styled.nav`
  width: 20%;
  height: 400px;
  float: left;
  background-color: lime;
`;

const Contents = styled.div`
  width: 80%;
  height: 400px;
  float: left;
  background-color: yellow;
`;

const Footer = styled.div`
  height: 100px;
  background-color: gray;
`;

export default function FloatLayout() {
  return (
    <Container>
      <Header />
      <Main>
        <Nav />
        <Contents></Contents>
      </Main>
      <Footer />
    </Container>
  );
}
