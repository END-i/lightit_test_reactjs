import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
const DisabledLink = styled.a`
  && {
    color: #888;
  }
`;

const paths = [
  { path: '/products', title: 'Products' },
  { path: '/profile', title: 'Profile', isAuth: true },
  // { path: '/favorite', title: 'Favorite', isAuth: true },
  { path: '/about', title: 'About' },
];
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
          {paths.map(({ path, isAuth, title }) => {
            const link = !isAuth || (isAuth && token) ? path : '';
            if (link) {
              return (
                <Link key={path} to={link}>
                  {title}
                </Link>
              );
            }
            return <DisabledLink key={path}>{title}</DisabledLink>;
          })}
        </Scenes>
        {localStorage.getItem('username') && <UserName>{localStorage.getItem('username')}</UserName>}
        <Button onClick={handleClick}>{token ? 'Sign Out' : 'Sign In'}</Button>
      </Wrapper>
      {show && <Login show={show} hideLogin={hideLogin} />}
    </>
  );
};

export default Header;
