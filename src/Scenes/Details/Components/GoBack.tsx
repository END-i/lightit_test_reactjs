import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

const GoBack = () => {
  const { goBack } = useHistory();

  return <Wrapper onClick={goBack}>Go back</Wrapper>;
};

export default GoBack;
