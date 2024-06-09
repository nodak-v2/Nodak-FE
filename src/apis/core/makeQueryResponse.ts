import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface GetData<T> {
  body: T;
  message: string;
}

export const makeQueryResponse =
  (axiosInstance: AxiosInstance) =>
  <T>(config: AxiosRequestConfig): Promise<GetData<T>> =>
    axiosInstance({
      ...config,
    }).then(({ data }: AxiosResponse) => data);
