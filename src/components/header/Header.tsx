import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 1;
  background: #1864ab;
  min-height: 200px;
  padding: 0 10em;
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 20px;
  font-weight: 700;
  padding: 40px 0;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  overflow: auto;
  flex: 1;
  align-items: flex-end;
`;

const Link = styled(NavLink)`
  display: 'flex';
  text-decoration: none;
  padding: 20px 10px;

  color: rgba(255, 255, 255, 0.4);
  &.active {
    color: rgba(255, 255, 255, 1);
  }
  &:hover {
    color: rgba(255, 255, 255, 1);
    background: #1c7ed6;
    border-radius: 5px;
  }
`;

export default function Header() {
  return (
    <Container>
      <Title>Layout Tutorial</Title>
      <Nav>
        <Link to="/horizontal-align">horizontal-alignment</Link>
        <Link to="/negative-margin">negative-margin</Link>
        <Link to="/float-layout">float-layout</Link>
        <Link to="/animation">animation</Link>
        <Link to="/verical-align">verical-align</Link>
      </Nav>
    </Container>
  );
}
