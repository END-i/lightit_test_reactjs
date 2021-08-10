import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  min-height: calc(100vh - 300px);
  font-size: 20px;
`;
const Title = styled.span`
  font-size: 200px;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <span>Page not found</span>
      <Title>404</Title>
      <Link to="/products">go to products</Link>
    </Wrapper>
  );
};

export default NotFound;
