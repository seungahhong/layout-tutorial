/** @jsxImportSource @emotion/react */

// /** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Title,
  Grid as GridCore,
  GridItem as GridItemCore,
  Container as ContainerCore,
  Description,
} from '../core/Content';

type IGridItemProps = {
  type: string;
  display?: string;
  float?: string;
};

const Container = styled(ContainerCore)`
  display: flex;
  margin: 0 20px;
`;

const Grid = styled(GridCore)`
  background-color: white;
`;

const GridItem = styled(GridItemCore)<IGridItemProps>`
  background-color: ${(props) =>
    props.type === 'first'
      ? 'orange'
      : props.type === 'second'
      ? 'red'
      : 'yellow'};
`;

export default function HorizontalAlign() {
  return (
    <Container>
      <div>
        <Title>inline-block</Title>
        <Grid>
          <GridItem type="first" display="inline-block"></GridItem>
          <GridItem type="second" display="inline-block"></GridItem>
          <GridItem type="third" display="inline-block"></GridItem>
        </Grid>
        <Title>inline-block font-size: 0</Title>
        <Grid style={{ fontSize: 0 }}>
          <GridItem type="first" display="inline-block"></GridItem>
          <GridItem type="second" display="inline-block"></GridItem>
          <GridItem type="third" display="inline-block"></GridItem>
        </Grid>
        <Title>inline-block vertical-align: top</Title>
        <Grid>
          <GridItem
            type="first"
            display="inline-block"
            style={{ verticalAlign: 'top' }}
          ></GridItem>
          <GridItem
            type="second"
            display="inline-block"
            style={{ verticalAlign: 'top' }}
          ></GridItem>
          <GridItem
            type="third"
            display="inline-block"
            style={{ verticalAlign: 'top' }}
          ></GridItem>
        </Grid>
        <Title>inline-block parent text-align center</Title>
        <Grid style={{ textAlign: 'center' }}>
          <GridItem type="first" display="inline-block"></GridItem>
          <GridItem type="second" display="inline-block"></GridItem>
          <GridItem type="third" display="inline-block"></GridItem>
        </Grid>
        <Title>inline-block parent text-align right</Title>
        <Grid style={{ textAlign: 'right' }}>
          <GridItem type="first" display="inline-block"></GridItem>
          <GridItem type="second" display="inline-block"></GridItem>
          <GridItem type="third" display="inline-block"></GridItem>
        </Grid>
        <Title>inline-block text center</Title>
        <Grid style={{ textAlign: 'center' }}>
          <GridItem
            type="first"
            display="inline-block"
            style={{ padding: '0 30px' }}
          >
            a
          </GridItem>
          <GridItem
            type="second"
            display="inline-block"
            style={{ padding: '0 30px' }}
          >
            b
          </GridItem>
          <GridItem
            type="third"
            display="inline-block"
            style={{ padding: '0 30px' }}
          >
            c
          </GridItem>
        </Grid>
        <Title>??????</Title>
        <Description>
          <p>
            {
              'HTML??? ???????????? ????????? ?????? ????????? ?????? ????????? ????????? ????????? ???????????? ????????? ????????? ?????????'
            }
          </p>
          <p>{'??????, ?????? ??????????????? ?????? ?????? ?????? ???????????? ????????? ??????'}</p>
          <p>{'inline ????????? Descent Height ????????? ????????? ??????'}</p>
          <p></p>
        </Description>
      </div>
      <div style={{ marginLeft: '30px' }}>
        <Title>float</Title>
        <Grid style={{ textAlign: 'center' }}>
          <GridItem
            type="first"
            float="left"
            style={{ opacity: '0.8' }}
          ></GridItem>
          <GridItem
            type="second"
            float="left"
            style={{ opacity: '0.8' }}
          ></GridItem>
          <GridItem
            type="third"
            float="left"
            style={{ opacity: '0.8', marginRight: '10px' }}
          ></GridItem>
        </Grid>
        <div style={{ border: '10px solid blue' }}>
          <Title>??????</Title>
          <Description>
            <p>
              {
                'float ????????? ??????????????? ????????? ????????? 0??????(????????? ???????????? ????????? ??????)'
              }
            </p>
            <p>
              {
                'float ????????? ?????? ????????? ?????? ????????? ?????????. ??????(???????????????)??? ????????? float ????????? ?????????????????? ??? ??? ?????? ?????????'
              }
            </p>
          </Description>
        </div>
        <div style={{ clear: 'both' }}></div>
        <Title>float overflow hidden</Title>
        <Grid style={{ textAlign: 'center', overflow: 'hidden' }}>
          <GridItem type="first" float="left" style={{ opacity: '0.8' }}>
            a
          </GridItem>
          <GridItem type="second" float="left" style={{ opacity: '0.8' }}>
            b
          </GridItem>
          <GridItem type="third" float="left" style={{ opacity: '0.8' }}>
            c
          </GridItem>
        </Grid>
        <div style={{ clear: 'both' }}></div>
        <Title>float overflow clearFix</Title>
        <Grid
          css={css`
            :after {
              display: block;
              clear: both;
              content: '';
            }
          `}
          style={{ textAlign: 'center' }}
        >
          <GridItem type="first" float="left" style={{ opacity: '0.8' }}>
            a
          </GridItem>
          <GridItem type="second" float="left" style={{ opacity: '0.8' }}>
            b
          </GridItem>
          <GridItem type="third" float="left" style={{ opacity: '0.8' }}>
            c
          </GridItem>
        </Grid>
        <div style={{ clear: 'both' }}></div>
        <Title>float overflow float right</Title>
        <Grid
          css={css`
            :after {
              display: block;
              clear: both;
              content: '';
            }
          `}
          style={{ textAlign: 'center' }}
        >
          <GridItem type="first" float="left" style={{ opacity: '0.8' }}>
            a
          </GridItem>
          <GridItem type="second" float="right" style={{ opacity: '0.8' }}>
            b
          </GridItem>
          <GridItem type="third" float="right" style={{ opacity: '0.8' }}>
            c
          </GridItem>
        </Grid>
      </div>
    </Container>
  );
}
