import { memo, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import useAxios from 'hooks/useAxios';
import type { ChangedComment, Comments } from 'types';
import View from './View';

const CommentsList = () => {
  const params = useParams<{ product_id?: string }>();
  const product_id = params?.product_id || '';
  const { data } = useAxios<Comments, string>({
    apiName: 'getComments',
    payload: product_id,
  });
  const [comments, updateComments] = useReducer(
    (state: ChangedComment[], action: ChangedComment[]) => [...action, ...state],
    [],
  );

  useEffect(() => {
    if (!data) return;

    updateComments(
      data.map(({ id, text, rate, created_by, created_at }) => ({
        id: new Date().getTime() + id,
        username: created_by.username,
        text,
        created_at,
        rate,
      })),
    );
  }, [data]);

  const addNewComment = (rate: number, text: string) => {
    updateComments([
      {
        id: new Date().getTime(),
        username: localStorage.getItem('username') || '',
        text,
        created_at: `${new Date()}`,
        rate,
      },
    ]);
  };

  return <View comments={comments} updateComments={addNewComment} />;
};

export default memo(CommentsList);
