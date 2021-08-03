import styled from 'styled-components';

import type { Product } from 'types';
import CommentsList from 'components/CommentsList';
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
}
const View = ({ product }: Props) => {
  return (
    <Wrapper>
      <ItemDetails product={product} />
      <CommentsList />
    </Wrapper>
  );
};

export default View;
