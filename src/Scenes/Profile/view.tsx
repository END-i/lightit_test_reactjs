import styled from 'styled-components';

import { IProfile } from 'types';

const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 50px 20px 0;
`;
const InputFile = styled.input`
  display: none;
`;
const Input = styled.input`
  outline: none;
  margin: 0 0 20px;
  padding: 10px 12px;
  font-size: 16px;
  min-width: 100%;
  box-sizing: border-box;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const Label = styled.label`
  align-self: flex-start;
  padding: 10px 20px;
  background: #ddd;
  margin: 20px 0;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: none;
  transition: 0.3s box-shadow;
  user-select: none;

  &:active {
    box-shadow: 5px 5px 5px 0px #888;
  }
`;
const Photo = styled.img`
  max-width: 300px;
  max-height: 300px;
`;
const SubmitButton = styled.button`
  cursor: pointer;
  padding: 12px 24px;
  background: #000;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 2px;
  align-self: flex-end;
  box-shadow: none;
  transition: 0.3s box-shadow;

  &:active {
    box-shadow: 5px 5px 5px 0px #888;
  }
`;

interface Props {
  onChangeProfile: (e: any) => void;
  onSubmit: (e: any) => void;
  profile: IProfile;
}
const View = ({ onChangeProfile, onSubmit, profile }: Props) => {
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        {profile.photo && <Photo src={profile.photo} alt="photo" />}
        <InputFile id="photo" type="file" onChange={onChangeProfile} name="photo" style={{ display: 'none' }} />
        <Label htmlFor="photo">Choose image</Label>
        <Input
          type="text"
          onChange={onChangeProfile}
          placeholder="First name"
          name="firstName"
          value={profile.firstName}
        />
        <Input
          type="text"
          onChange={onChangeProfile}
          placeholder="Last name"
          name="lastName"
          value={profile.lastName}
        />
        <SubmitButton type="submit">Save</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default View;
