import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from 'hooks/useFetch';
import type { Comments } from 'types';
import CommentItem from './CommentItem';
import Rate from './Rate';

const Wrapper = styled.div``;
const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #ddd;
  padding: 0 0 10px;
  margin-bottom: 10px;

  & > textarea {
    margin-bottom: 10px;
    width: 100%;
    min-height: 100px;
    resize: none;
    box-sizing: border-box;
  }
  & > button {
    cursor: pointer;
    padding: 12px 24px;
    background: #000;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 2px;
  }
`;
const CommentsList = styled.div`
  max-height: calc(100vh - 350px);
  overflow: auto;
  padding-right: 5px;
`;
const ErrorText = styled.span`
  color: #b51919;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

interface Props {
  comments?: Comments;
}

const CommentsView = ({ comments }: Props) => {
  const params = useParams<{ product_id?: string }>();
  const product_id = params?.product_id || '';
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const { data, loading, error, fetchData } = useFetch<any>({
    url: `api/reviews/${product_id}`,
    options: {
      method: 'post',
      body: JSON.stringify({
        rate: rating,
        text,
      }),
    },
    lazyFetch: true,
  });

  const onChangeRate = (rate: number) => {
    setRating(rate);
  };

  const onChangeText = (e: any) => {
    setText(e.target.value);
  };

  if (!comments) {
    return null;
  }
  return (
    <Wrapper>
      <Rate changeRate={onChangeRate} rating={rating} />
      <TextAreaWrapper>
        <textarea onChange={onChangeText} value={text} />
        <button onClick={fetchData}>Send comment</button>
        {error && <ErrorText>{error}</ErrorText>}
      </TextAreaWrapper>
      <CommentsList>
        {comments.map((comment) => {
          return <CommentItem key={comment.id} {...comment} />;
        })}
      </CommentsList>
    </Wrapper>
  );
};

export default CommentsView;
