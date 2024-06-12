import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
  Method,
  isAxiosError,
} from 'axios';

interface BadRequestResponse {
  isOk: false;
  isBadRequest: true;
  data: {
    message: string;
    code: string;
  };
}

interface OkResponse<T> {
  isOk: true;
  isBadRequest: false;
  data: T;
}

type MutationResponse<T> = BadRequestResponse | OkResponse<T>;

const makeOkResponse = <T>({
  data,
}: AxiosResponse<T>): MutationResponse<T> => ({
  isOk: true,
  isBadRequest: false,
  data,
});

const makeBadResponse = (error: unknown): BadRequestResponse => {
  if (!isAxiosError(error) || !error?.response) {
    throw error;
  }

  if (error.response.status !== HttpStatusCode.BadRequest) {
    throw error;
  }

  return {
    isOk: false,
    isBadRequest: true,
    data: error.response.data,
  };
};

/**
 * 응답 코드가 2xx대 혹은 400 Bad Request일 때 {status, data}로 응답해요.
 */
export const makeMutationResponse =
  (axiosInstance: AxiosInstance, methodType: Method) =>
  <T>(config: AxiosRequestConfig): Promise<MutationResponse<T>> =>
    axiosInstance({
      ...config,
      method: methodType,
    }).then(makeOkResponse, makeBadResponse);
