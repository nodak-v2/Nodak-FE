import { Comment } from './comments';

export interface GetData<T> {
  body: T;
  message: string;
}

const Authenticated = (
  init?: RequestInit,
  cookieHeader?: string,
): RequestInit => {
  return {
    ...init,
    credentials: 'include',
    headers: {
      ...init?.headers,
      ...(cookieHeader && { Cookie: cookieHeader }),
    },
  };
};

export class API {
  private static api = async <T>(path: string, init?: RequestInit) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${path}`;
    const response = await fetch(url, init);
    const data = (await response.json()) as GetData<T>;
    if (!response.ok) throw new Error(data.message);
    return data.body as T;
  };

  public static getStatus = (cookieHeader: string) =>
    API.api('/user/status', Authenticated({ method: 'GET' }, cookieHeader));

  public static getComments = (postId: string, cookieHeader?: string) =>
    API.api<Comment[]>(
      `/posts/${postId}/comments`,
      Authenticated({ method: 'GET' }, cookieHeader),
    );
}
