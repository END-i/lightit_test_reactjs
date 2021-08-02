import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Login from 'components/Login';

const Wrapper = styled.div`
  padding: 16px;
  background-color: #221f1f;
  color: #fff;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 30px;
`;
const UserName = styled.span`
  margin-left: auto;
  margin-right: 20px;
`;
const Button = styled.button`
  margin-left: auto;
  margin-right: 20px;
  padding: 5px 20px;
  border: none;
  border-radius: 2px;
`;

const Header = () => {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem('token');
  const { push } = useHistory();

  const handleClick = () => {
    if (token) {
      localStorage.removeItem('token');
      push('');
      return;
    }

    setShow(true);
  };

  const hideLogin = () => setShow(false);

  return (
    <>
      <Wrapper>
        <Logo>LOGO</Logo>
        {token && <UserName>username</UserName>}
        <Button onClick={handleClick}>{token ? 'Sign Out' : 'Sign In'}</Button>
      </Wrapper>
      {show && <Login show={show} hideLogin={hideLogin} />}
    </>
  );
};

export default Header;
