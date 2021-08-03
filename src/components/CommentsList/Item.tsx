import styled from 'styled-components';

import type { CreatedBy } from 'types';

const CommentWrapper = styled.div`
  background: #ddd;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
const UserName = styled.strong`
  &:first-letter {
    text-transform: capitalize;
  }
`;
const Info = styled.div`
  display: flex;
  border-top: 1px solid #888;
  padding-top: 10px;
`;
const Time = styled.i``;
const Rate = styled.span`
  flex-grow: 1;
`;

interface Props {
  text: string;
  rate: number;
  created_at: any;
  username: string;
}
const CommentItem = ({ text, rate, created_at, username }: Props) => {
  const data = () => {
    const date = new Date(created_at);

    return date
      .toLocaleString('ru', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        localeMatcher: 'best fit',
      })
      .replace(/[.]/gi, '/');
  };

  return (
    <CommentWrapper>
      <UserName>{username}</UserName>
      <p>{text}</p>
      <Info>
        <Rate>{`Rate: ${rate}`}</Rate>
        <Time>{data()}</Time>
      </Info>
    </CommentWrapper>
  );
};

export default CommentItem;
