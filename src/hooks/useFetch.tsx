import { useEffect, useState } from 'react';

interface Props {
  url: string;
  options: any;
  lazyFetch?: boolean;
}

export const API_URL = 'http://smktesting.herokuapp.com/';

function useFetch<T>({ url, options, lazyFetch }: Props) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (lazyFetch) {
      return;
    }

    fetchData();
  }, [url]);

  const fetchData = async () => {
    setLoading(true);
    setData(undefined);
    setError('');

    try {
      const response = await fetch(`${API_URL}${url}`, {
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        ...options,
      });
      if (!response.ok) {
        throw new Error(`Status:${response.status}. ${response.statusText}`);
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      let text = 'Something wen wrong!';
      if (err?.message) {
        text = err.message;
      }
      setError(text);
    }

    setLoading(false);
  };

  return { fetchData, data, loading, error };
}

export default useFetch;
