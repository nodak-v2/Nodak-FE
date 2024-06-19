import { useSuspenseQuery } from '@tanstack/react-query';

import { api } from './core';

// export const getUserStatus = async (cookieHeader?: string) => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/user/status`,
//     {
//       method: 'GET',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         ...(cookieHeader && { Cookie: cookieHeader }),
//       },
//     },
//   );

//   const data = await response.json();

//   return data;
// };

interface UserStatus {
  userId: number;
  nickname: string;
  profileImage: string | null;
  login: boolean;
}

const getUserStatus = () => {
  return api.get<UserStatus>({
    url: `/user/status`,
  });
};

export const useGetUserStatusAPI = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['users', 'status'],
    queryFn: getUserStatus,
  });

  return data.body;
};
