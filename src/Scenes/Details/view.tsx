import styled from 'styled-components';

import type { Product, Comments } from 'types';
import CommentsView from './Components/CommentsView';
import GoBack from './Components/GoBack';
import ItemDetails from './Components/ItemDetails';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, max(500px));
  justify-content: space-around;
  grid-gap: 100px;
  padding: 50px 20px 0;
  position: relative;
`;

interface Props {
  product?: Product;
  comments?: Comments;
}
const View = ({ product, comments }: Props) => {
  return (
    <Wrapper>
      <GoBack />
      <ItemDetails product={product} />
      <CommentsView comments={comments} />
    </Wrapper>
  );
};

export default View;
