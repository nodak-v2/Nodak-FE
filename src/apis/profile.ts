import { useSuspenseQuery } from '@tanstack/react-query';

import { api } from './core';

interface ProfileResponse {
  email: string;
  nickname: string;
  profileImageUrl: string;
  introduction: string;
  createdAt: string;
  updatedAt: string;
  followerCount: number;
  followeeCount: number;
}

// export const getProfile = async (userId: string) => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
//   );
//   const data = (await response.json()) as GetData<ProfileResponse>;
//   console.log(data.body);
//   return data.body;
// };

const getProfile = (userId: string) => {
  return api.get<ProfileResponse>({
    url: `/user/${userId}`,
  });
};

export const useGetProfileAPI = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['profile', userId],
    queryFn: () => getProfile(userId),
  });

  return data.body;
};
