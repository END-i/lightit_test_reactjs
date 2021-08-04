import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { ActionTypes, useDispatch, useStore } from 'context';
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
  cursor: pointer;
`;
const UserName = styled.span`
  margin-right: 20px;
  &:first-letter {
    text-transform: capitalize;
  }
`;
const Button = styled.button`
  margin-right: 20px;
  padding: 5px 20px;
  border: none;
  border-radius: 2px;
`;
const Scenes = styled.div`
  margin: auto;
  & > a {
    margin: 0 20px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const { token } = useStore();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (token) {
      dispatch({ type: ActionTypes.logout });
    } else {
      setShow(true);
    }
  };
  const hideLogin = () => setShow(false);

  return (
    <>
      <Wrapper>
        <Logo>LOGO</Logo>
        <Scenes>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </Scenes>
        {localStorage.getItem('username') && <UserName>{localStorage.getItem('username')}</UserName>}
        <Button onClick={handleClick}>{token ? 'Sign Out' : 'Sign In'}</Button>
      </Wrapper>
      {show && <Login show={show} hideLogin={hideLogin} />}
    </>
  );
};

export default Header;
