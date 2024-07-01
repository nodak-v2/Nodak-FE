import axios from 'axios';

import { makeMutationResponse } from './makeMutationResponse';
import { makeQueryResponse } from './makeQueryResponse';

const HTTP_METHODS = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  DELETE: 'delete',
} as const;

const TIME_OUT = 2000;

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: TIME_OUT,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const api = {
  get: makeQueryResponse(axiosInstance),
  post: makeMutationResponse(axiosInstance, HTTP_METHODS.POST),
  patch: makeMutationResponse(axiosInstance, HTTP_METHODS.PATCH),
  delete: makeMutationResponse(axiosInstance, HTTP_METHODS.DELETE),
};
