import { useEffect, useState } from 'react';
import axios from 'axios';

import useAxios from 'hooks/useAxios';
import View from './view';
import type { AuthRequest, AuthResponse } from 'types';
import { ActionTypes, useDispatch } from 'context';

interface Props {
  hideLogin: () => void;
  show: boolean;
}
const Login = ({ show, hideLogin }: Props) => {
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(true);
  const [responseError, setResponseError] = useState('');
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
    if (!data) return;
    if (data?.message) {
      setResponseError(data?.message);
      return;
    }

    dispatch({ type: ActionTypes.setToken, payload: data.token });
    dispatch({ type: ActionTypes.setUserName, payload: formData.username });
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
      error={error || responseError}
    />
  );
};

export default Login;
