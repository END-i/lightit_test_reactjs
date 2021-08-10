import styled from 'styled-components';

import { IMG_BASE_URL } from 'services/api';
import { Product } from 'types';

const Wrapper = styled.div``;
const Img = styled.img`
  max-width: 250px;
  width: 100%;
`;
const Title = styled.h2`
  &:first-letter {
    text-transform: capitalize;
  }
`;
const Description = styled.p`
  &:first-letter {
    text-transform: capitalize;
  }
`;

interface Props {
  product?: Product;
}
const ItemDetails = ({ product }: Props) => {
  if (!product) {
    return null;
  }

  const { img, title, text } = product;
  return (
    <Wrapper>
      <Img src={`${IMG_BASE_URL}${img}`} alt="product-image" />
      <Title>{title}</Title>
      <Description>{text}</Description>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore corporis a impedit eos nesciunt, nam dolorem
        sint laborum ducimus unde! Veniam dolore sequi fugit asperiores iure nam, sunt ea, perspiciatis explicabo
        temporibus vero accusamus. Velit necessitatibus voluptatibus voluptates placeat ullam deleniti doloribus quae
        neque nobis expedita, deserunt, beatae alias praesentium nam fuga delectus dolore numquam minus. Aliquam
        asperiores ratione error adipisci atque sed nemo! Unde provident inventore expedita aut officia temporibus
        praesentium quidem eveniet ratione doloribus modi voluptatem, exercitationem dolores, quis obcaecati at tempora
        velit ea, iste ipsam accusantium. Vero aperiam mollitia dignissimos ad ut architecto nulla placeat fugit
        blanditiis?
      </Description>
    </Wrapper>
  );
};

export default ItemDetails;
