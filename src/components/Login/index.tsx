import { useEffect, useState } from 'react';
import axios from 'axios';

import useAxios from 'hooks/useAxios';
import View from './view';
import type { AuthRequest, AuthResponse } from 'types';

interface Props {
  hideLogin: () => void;
  show: boolean;
}
const Login = ({ show, hideLogin }: Props) => {
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState<AuthRequest>({
    username: '',
    password: '',
  });
  const {
    data,
    error,
    loading,
    fetchData: login,
  } = useAxios<AuthResponse, AuthRequest>({
    apiName: showLogin ? 'login' : 'register',
    lazyFetch: true,
    payload: formData,
  });

  useEffect(() => {
    if (!data || !data?.success) return;

    localStorage.setItem('token', data.token);
    localStorage.setItem('username', formData.username);
    axios.defaults.headers.common['Authorization'] = `Token ${data.token}`;
    hideLogin();
  }, [data]);

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    login();
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
