import styled from 'styled-components';
import axios from 'axios';

import Header from 'components/Header';
import Routes from './Routes';
import { useEffect } from 'react';

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
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    }
  }, []);

  return (
    <Wrapper>
      <Header />
      <Routes />
    </Wrapper>
  );
};

export default App;
