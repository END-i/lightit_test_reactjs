import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ show: boolean; visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: #000000d9;
  display: flex;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  font-size: 30px;
  letter-spacing: 20px;
  color: #fff;
  transition: 300ms opacity;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

interface Props {
  children: React.ReactNode;
  loading: boolean;
}
const Loader = ({ children, loading }: Props) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (loading) {
      setVisible(true);
      setTimeout(() => {
        setShow(true);
      });
    } else {
      setTimeout(() => {
        setShow(false);
        setTimeout(() => {
          setVisible(false);
        }, 300);
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <Wrapper show={show} visible={visible}>
        Loading...
      </Wrapper>
      {loading ? null : children}
    </>
  );
};

export default Loader;
