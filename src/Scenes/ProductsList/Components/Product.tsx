import styled from 'styled-components';

import { API_URL } from 'hooks/useFetch';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const Title = styled.h2`
  font-size: 16px;
`;

interface Props {
  onClick: () => void;
  img: string;
  title: string;
}
const Product = ({ onClick, img, title }: Props) => {
  return (
    <ItemWrapper onClick={onClick}>
      <Image src={`${API_URL}static/${img}`} alt="product-image" />
      <Title>{title}</Title>
    </ItemWrapper>
  );
};

export default Product;
