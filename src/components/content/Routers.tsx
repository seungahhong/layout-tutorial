import styled from '@emotion/styled';
import { Navigate, Route, Routes } from 'react-router-dom';
import FloatLayout from './FloatLayout';
import HorizontalAlign from './HorizontalAlign';
import NegativeMargin from './NegativeMargin';
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
        <Route path="/float-layout" element={<FloatLayout />} />
        <Route path="/negative-margin" element={<NegativeMargin />} />
        <Route path="/verical-align" element={<VerticalAlign />} />
        <Route path="/" element={<Navigate replace to="/horizontal-align" />} />
      </Routes>
    </Container>
  );
}
