import { useHistory } from 'react-router-dom';

import useAxios from 'hooks/useAxios';
import type { Products } from 'types';
import View from './view';

const ProductsList = () => {
  const { push } = useHistory();
  const { data = [] } = useAxios<Products>({ apiName: 'getProducts' });

  const handleClick = (id: number) => {
    push(`/details${id}`);
  };

  return <View data={data} handleClick={handleClick} />;
};

export default ProductsList;
