import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import type { AddCommentPayload, AddCommentResponse, NewComment } from 'types';
import Rate from './Rate';
import useAxios from 'hooks/useAxios';

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
const ErrorText = styled.span`
  color: #b51919;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

interface Props {
  updateComments: (rate: number, text: string) => void;
}
const CommentForm = ({ updateComments }: Props) => {
  const params = useParams<{ product_id?: string }>();
  const product_id = params?.product_id || '';
  const [text, setText] = useState('');
  const [rate, setRate] = useState<number>(0);
  const { data, error, fetchData } = useAxios<AddCommentResponse, AddCommentPayload>({
    apiName: 'addComment',
    lazyFetch: true,
    payload: {
      rate,
      text,
      product_id,
    },
  });

  useEffect(() => {
    if (!data?.success) return;

    updateComments(rate, text);
    setRate(0);
    setText('');
  }, [data]);
  console.log('data :>> ', data, error);
  const onChangeRate = (value: number) => {
    setRate(value);
  };

  const onChangeText = (e: any) => {
    setText(e.target.value);
  };

  return (
    <>
      <Rate changeRate={onChangeRate} rate={rate} />
      <TextAreaWrapper>
        <textarea onChange={onChangeText} value={text} />
        <button onClick={fetchData}>Send comment</button>
        {error && <ErrorText>{error}</ErrorText>}
      </TextAreaWrapper>
    </>
  );
};

export default CommentForm;
