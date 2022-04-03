/** @jsxImportSource @emotion/react */

// /** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

type IGridItemProps = {
  type: string;
  display?: string;
  float?: string;
};

const Container = styled.div`
  display: flex;
  margin: 0 20px;
`;

const Title = styled.h4`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 700;
`;

const Grid = styled.div`
  margin-top: 10px;
  background-color: white;
`;

const GridItem = styled.div<IGridItemProps>`
  display: ${(props) => (props.display ? props.display : 'block')};
  float: ${(props) => props.float && props.float};
  width: 100px;
  height: 100px;

  background-color: ${(props) =>
    props.type === 'first'
      ? 'orange'
      : props.type === 'second'
      ? 'red'
      : 'yellow'};
`;

const Description = styled.div`
  font-weight: 600;
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
        <Title>설명</Title>
        <Description>
          <p>
            {
              'HTML은 컨텐츠의 구조를 잡는 역할만 하는 것이지 표현에 역할이 아니여서 제한된 서식이 저장됨'
            }
          </p>
          <p>{'엔터, 여러 띄워쓰기가 있을 경우 한칸 띄어쓰기 공간이 생김'}</p>
          <p>{'inline 요소는 Descent Height 영역이 잡혀서 생김'}</p>
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
          <Title>설명</Title>
          <Description>
            <p>
              {
                'float 속성을 추가하면서 부모의 높이가 0이됨(자식이 띄워지기 때문에 발생)'
              }
            </p>
            <p>
              {
                'float 속성은 가로 배치를 위한 속성은 아니다. 컨텐츠가 어우러지게끔 처리, 띄워져있음'
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
