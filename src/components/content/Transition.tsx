import styled from '@emotion/styled';
import {
  Title,
  Grid as GridCore,
  GridItem as GridItemCore,
  Container,
  Description,
} from '../core/Content';

type CircleType = {
  transitionTiming: string;
};

const Section = styled.section`
  padding: 20px;
`;

const Content1 = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid black;

  & > .circle1 {
    position: absolute;
    top: 100px;
    left: 10px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #5c940d;
    transition-duration: 2s;

    &.active {
      left: 60px;
    }
  }

  & > .circle2 {
    position: absolute;
    top: 100px;
    right: 10px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #d9480f;
    transition-duration: 2s;

    &.active {
      right: 60px;
    }
  }

  & > .circle3 {
    position: absolute;
    top: 10px;
    left: 100px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #5c940d;
    transition-duration: 2s;

    &.active {
      top: 60px;
    }
  }

  & > .circle4 {
    position: absolute;
    bottom: 10px;
    right: 100px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #d9480f;
    transition-duration: 2s;

    &.active {
      bottom: 60px;
    }
  }
`;

const Grid = styled(GridCore)`
  width: 500px;
  margin-top: 50px;
`;

const GridItem = styled(GridItemCore)`
  background: white;
  padding: 10px;
  margin-top: 10px;
`;

const Circle = styled.div<CircleType>`
  background: blue;
  width: 100px;
  height: 100px;
  transition-duration: 2s;
  transition-timing-function: ${(props) => props.transitionTiming};

  &.hover {
    background: red;
    margin-left: 300px;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Transition: React.FunctionComponent = () => {
  const handleContentMouuseEnter = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const childrens = (event.target as HTMLDivElement).querySelectorAll('div');
    if (childrens) {
      childrens.forEach((children) => {
        children.classList.add('active');
      });
    }
  };

  const handleContentMouuseLeave = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const childrens = (event.target as HTMLDivElement).querySelectorAll('div');
    if (childrens) {
      childrens.forEach((children) => {
        children.classList.remove('active');
      });
    }
  };

  const handleCircleMouuseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const children = (event.target as HTMLDivElement).querySelector('div');
    if (children) {
      children.classList.add('hover');
    }
  };

  const handleCircleMouuseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const children = (event.target as HTMLDivElement).querySelector('div');
    if (children) {
      children.classList.remove('hover');
    }
  };

  return (
    <Container>
      <Section>
        <Title>Transition Example</Title>
        <Content1
          onMouseEnter={handleContentMouuseEnter}
          onMouseLeave={handleContentMouuseLeave}
        >
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </Content1>
        <Grid>
          <Title>transition-timing-function: linear</Title>
          <Description>
            ?????????, ?????? ????????? ????????? ?????? ??????, ???????????? ????????? ?????????
            ???????????? ???????????????.
          </Description>
          <GridItem
            onMouseEnter={handleCircleMouuseEnter}
            onMouseLeave={handleCircleMouuseLeave}
          >
            <Circle transitionTiming="linear" />
          </GridItem>
        </Grid>
        <Grid>
          <Title>transition-timing-function: ease</Title>
          <Description>
            ???????????? ??????, ???????????? ease ?????? ????????? ????????? ??? ????????? ???????????????
            ?????? ????????? ????????????.
          </Description>
          <GridItem
            onMouseEnter={handleCircleMouuseEnter}
            onMouseLeave={handleCircleMouuseLeave}
          >
            <Circle transitionTiming="ease" />
          </GridItem>
        </Grid>
        <Grid>
          <Title>transition-timing-function: ease-in</Title>
          <Description>
            ??????, ?????????????????? ????????? ????????? ??? ?????? ???????????? ????????????.
          </Description>
          <GridItem
            onMouseEnter={handleCircleMouuseEnter}
            onMouseLeave={handleCircleMouuseLeave}
          >
            <Circle transitionTiming="ease-in" />
          </GridItem>
        </Grid>
        <Grid>
          <Title>transition-timing-function: ease-out</Title>
          <Description>
            ??????, ?????????????????? ????????? ????????? ??? ????????? ????????????.
          </Description>
          <GridItem
            onMouseEnter={handleCircleMouuseEnter}
            onMouseLeave={handleCircleMouuseLeave}
          >
            <Circle transitionTiming="ease-out" />
          </GridItem>
        </Grid>
        <Grid>
          <Title>transition-timing-function: ease-in-out</Title>
          <Description>
            ???????????? ?????? ?????? ??????, ????????? ????????? ??? ?????? ???????????? ???????????????
            ?????? ??????????????? ???????????? ease ??? ???????????????, ??? ?????? ????????? ease ???
            ???????????? ??????????????? ????????????
          </Description>
          <GridItem
            onMouseEnter={handleCircleMouuseEnter}
            onMouseLeave={handleCircleMouuseLeave}
          >
            <Circle transitionTiming="ease-in-out" />
          </GridItem>
        </Grid>
      </Section>
    </Container>
  );
};

export default Transition;
