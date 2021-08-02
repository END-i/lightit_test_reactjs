import { useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import useFetch from 'hooks/useFetch';
import type { Comments, Products } from 'types';
import View from './view';

const Product = () => {
  const params = useParams<{ product_id?: string }>();
  const product_id = params?.product_id || '';
  const comments = useFetch<Comments>({ url: `api/reviews/${product_id}`, options: {} });
  const products = useFetch<Products>({ url: 'api/products', options: {} });

  const product = useMemo(() => (products.data || []).find(({ id }) => id === Number(product_id)), [products]);

  return <View product={product} comments={comments.data} />;
};

export default Product;
