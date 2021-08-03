import styled from 'styled-components';

import type { Products } from 'types';
import { IMG_BASE_URL } from 'hooks/api';

const WrapperList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
  grid-gap: 20px;
  padding: 20px;
`;
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

  &:first-letter {
    text-transform: capitalize;
  }
`;

interface Props {
  data: Products;
  handleClick: (id: number) => void;
}
const View = ({ data, handleClick }: Props) => {
  return (
    <WrapperList>
      {data.map(({ id, img, title }) => {
        return (
          <ItemWrapper key={id} onClick={() => handleClick(id)}>
            <Image src={`${IMG_BASE_URL}${img}`} alt="product-image" />
            <Title>{title}</Title>
          </ItemWrapper>
        );
      })}
    </WrapperList>
  );
};

export default View;
