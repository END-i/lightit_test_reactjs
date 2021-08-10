import { useEffect, useState } from 'react';

import services from 'services/api';

interface Props<C> {
  apiName: string;
  lazyFetch?: boolean;
  payload?: C;
}
function useAxios<T, C = string>({ apiName, lazyFetch, payload }: Props<C>) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (lazyFetch) return;

    fetchData();
  }, [apiName, payload]);

  const fetchData = async () => {
    setLoading(true);
    setData(undefined);
    setError('');

    try {
      const request = services[apiName];

      if (!request) throw new Error('Error! Api not found');

      const { status, statusText, ...rest } = await request(payload);
      if (status < 200 && status > 300) throw new Error(`Status: ${status}. ${statusText}`);

      setData(rest.data);
    } catch (err) {
      let text = '';
      if (err.response) {
        text = `Status: ${err.response.status}. ${err.response.statusText}`;
      } else {
        text = err.message;
      }
      setError(text);
    }

    setLoading(false);
  };

  return { fetchData, data, loading, error };
}

export default useAxios;
