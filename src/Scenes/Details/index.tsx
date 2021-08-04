import { memo, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import useAxios from 'hooks/useAxios';
import type { Products } from 'types';
import View from './view';

const Product = () => {
  const params = useParams<{ product_id?: string }>();
  const product_id = params?.product_id || '';
  const products = useAxios<Products>({ apiName: 'getProducts' });

  const product = useMemo(() => (products.data || []).find(({ id }) => id === Number(product_id)), [products]);

  return <View product={product} />;
};

export default memo(Product);
