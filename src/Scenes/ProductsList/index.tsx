import { useHistory } from 'react-router-dom';

import useAxios from 'hooks/useAxios';
import type { Products } from 'types';
import View from './view';
import Loader from 'components/Loader';

const ProductsList = () => {
  const { push } = useHistory();
  const { data = [], loading } = useAxios<Products>({ apiName: 'getProducts' });

  const handleClick = (id: number) => {
    push(`/details${id}`);
  };

  return (
    <Loader loading={loading}>
      <View data={data} handleClick={handleClick} />
    </Loader>
  );
};

export default ProductsList;
