import Header from './components/header/Header';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import Content from './components/content/Routers';

function App() {
  return (
    <>
      <Global
        styles={css`
          // ${emotionReset}
          html,
          body {
            height: 100%;
          }

          #root {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      />
      <Header />
      <Content />
    </>
  );
}

export default App;
