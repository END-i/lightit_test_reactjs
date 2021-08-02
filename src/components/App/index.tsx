import styled from 'styled-components';

import Header from 'components/Header';
import Routes from './Routes';

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 100vh;
  background: #fff;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes />
    </Wrapper>
  );
};

export default App;
