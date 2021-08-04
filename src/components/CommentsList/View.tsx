import styled from 'styled-components';

import type { ChangedComment, Comments } from 'types';
import CommentForm from './CommentForm';
import Item from './Item';

const Wrapper = styled.div``;

const CommentsList = styled.div`
  max-height: calc(100vh - 400px);
  overflow: auto;
  padding-right: 5px;
`;

interface Props {
  comments: ChangedComment[];
  updateComments: (rate: number, text: string) => void;
}
const CommentsView = ({ comments, updateComments }: Props) => {
  return (
    <Wrapper>
      <CommentForm updateComments={updateComments} />
      <CommentsList>
        {comments.map((comment) => {
          return <Item key={comment.id} {...comment} />;
        })}
      </CommentsList>
    </Wrapper>
  );
};

export default CommentsView;
