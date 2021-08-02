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
const UserName = styled.strong``;
const Time = styled.i`
  align-self: flex-end;
`;

interface Props {
  text: string;
  rate: number;
  created_at: any;
  created_by: CreatedBy;
}
const CommentItem = ({ text, rate, created_at, created_by: { username } }: Props) => {
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
      <Time>{data()}</Time>
    </CommentWrapper>
  );
};

export default CommentItem;
