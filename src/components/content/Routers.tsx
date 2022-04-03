import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import HorizontalAlign from './HorizontalAlign';
import VerticalAlign from './VerticalAlign';

const Container = styled.main`
  display: flex;
  flex: 1;
  background: #fcc2d7;
`;

export default function Routers() {
  return (
    <Container>
      <Routes>
        <Route path="/horizontal-align" element={<HorizontalAlign />} />
        <Route path="/verical-align" element={<VerticalAlign />} />
      </Routes>
    </Container>
  );
}
