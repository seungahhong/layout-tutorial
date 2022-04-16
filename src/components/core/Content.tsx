/** @jsxImportSource @emotion/react */

// /** @jsx jsx */
import styled from '@emotion/styled';

export type IGridItemProps = {
  type: string;
  display?: string;
  float?: string;
};

export const Container = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h4`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 700;
`;

export const Grid = styled.div`
  margin-top: 10px;
`;

export const GridItem = styled.div<IGridItemProps>`
  display: ${(props) => (props.display ? props.display : 'block')};
  float: ${(props) => props.float && props.float};
  width: 100px;
  height: 100px;
`;

export const Description = styled.div`
  font-weight: 600;
`;
