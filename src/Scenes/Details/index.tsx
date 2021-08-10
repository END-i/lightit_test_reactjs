import { memo, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import useAxios from 'hooks/useAxios';
import type { Products } from 'types';
import View from './view';
import Loader from 'components/Loader';

const Product = () => {
  const params = useParams<{ product_id?: string }>();
  const product_id = params?.product_id || '';
  const { data, loading } = useAxios<Products>({ apiName: 'getProducts' });

  const product = useMemo(() => (data || []).find(({ id }) => id === Number(product_id)), [data]);

  return (
    <Loader loading={loading}>
      <View product={product} />
    </Loader>
  );
};

export default memo(Product);
