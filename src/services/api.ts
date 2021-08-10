import axios from 'axios';

import type { AuthRequest } from 'types';

export const BASE_URL = 'http://smktesting.herokuapp.com/';
export const IMG_BASE_URL = BASE_URL + 'static/';

axios.defaults.baseURL = BASE_URL;

async function getProducts() {
  return await axios({
    method: 'get',
    url: 'api/products',
  });
}

async function getComments(product_id: string) {
  return await axios({
    method: 'get',
    url: `api/reviews/${product_id}`,
  });
}

async function addComment({ product_id, rate, text }: any) {
  return await axios({
    method: 'post',
    url: `api/reviews/${product_id}`,
    data: {
      rate,
      text,
    },
  });
}

async function register(payload: AuthRequest) {
  return await axios({
    method: 'post',
    url: `api/register/`,
    data: payload,
  });
}

async function login(payload: AuthRequest) {
  return await axios({
    method: 'post',
    url: `api/login/`,
    data: payload,
  });
}

const services: {
  [key: string]: any;
} = {
  getProducts,
  getComments,
  addComment,
  register,
  login,
};

export default services;
