import styled from 'styled-components';

import Header from 'components/Header';
import Routes from './Routes';
import Notifications from 'components/Notifications';

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 100vh;
  background: #fff;
`;
const Content = styled.div`
  overflow: auto;
  height: calc(100vh - 68px);
  box-sizing: border-box;
`;
const App = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Routes />
      </Content>
      <Notifications />
    </Wrapper>
  );
};

export default App;
