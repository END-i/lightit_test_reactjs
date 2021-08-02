import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from 'hooks/useFetch';
import type { Products } from 'types';
import Product from './Components/Product';

const WrapperList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
  grid-gap: 20px;
  padding: 20px;
`;

const ProductsList = () => {
  const { push } = useHistory();
  const { data = [], loading, error } = useFetch<Products>({ url: 'api/products/', options: {} });

  const handleClick = (id: number) => {
    push(`/details${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <WrapperList>
      {data.map(({ id, text, ...rest }) => {
        return <Product {...rest} onClick={() => handleClick(id)} />;
      })}
    </WrapperList>
  );
};

export default ProductsList;
