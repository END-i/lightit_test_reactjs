import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Dialog = styled.div`
  background: #fff;
  min-width: 300px;
  padding: 20px 10px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
`;
const Overlay = styled.div<{ show: boolean }>`
  background: #000000b3;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
const SwitchForm = styled.span`
  margin: auto 20px 20px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: auto;
`;
const Title = styled.span`
  text-align: center;
  font-size: 20px;
  margin: 20px 0 40px;
`;
const Input = styled.input`
  margin: 0 0 20px;
  padding: 8px 12px;
`;
const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 12px 24px;
  background: #000;
  color: #fff;
  border: none;
  outline: none;
`;
const ErrorText = styled.span`
  color: #b51919;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  showLogin: boolean;
  onShowLogin: () => void;
  formData: {
    username: string;
    password: string;
  };
  handleChange: (e: any) => void;
  onSubmit: () => void;
  error: string;
  hideLogin: () => void;
  show: boolean;
}
const View = ({ onShowLogin, showLogin, formData, handleChange, onSubmit, error, show, hideLogin }: Props) => {
  return (
    <Wrapper>
      <Overlay show={show} onClick={hideLogin} />
      <Dialog>
        <Title>{showLogin ? 'Login' : 'Registration'}</Title>
        <Input placeholder="User name" type="text" value={formData.username} onChange={handleChange} name="username" />
        <Input
          placeholder="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
        <SubmitButton onClick={onSubmit}>{showLogin ? 'Sign In' : 'Send'}</SubmitButton>
        {error && <ErrorText>{error}</ErrorText>}
        <SwitchForm onClick={onShowLogin}>{showLogin ? 'Registration' : 'Login'}</SwitchForm>
      </Dialog>
    </Wrapper>
  );
};

export default View;
