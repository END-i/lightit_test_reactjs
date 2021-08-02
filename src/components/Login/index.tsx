import { useState } from 'react';

import useFetch from 'hooks/useFetch';
import View from './view';

interface Props {
  hideLogin: () => void;
  show: boolean;
}
const Login = ({ show, hideLogin }: Props) => {
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { data, error, loading, fetchData } = useFetch<any>({
    url: `api/${showLogin ? 'login' : 'register'}`,
    options: {
      method: 'post',
      body: JSON.stringify(formData),
    },
    lazyFetch: true,
  });

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    fetchData();
  };

  const reset = () => {
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <View
      show={show}
      hideLogin={hideLogin}
      showLogin={showLogin}
      onShowLogin={() => {
        reset();
        setShowLogin((prev) => !prev);
      }}
      handleChange={handleChange}
      formData={formData}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default Login;
