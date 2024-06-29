import { useSuspenseQuery } from '@tanstack/react-query';

import { api } from './core';

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
    queryKey: ['status'],
    queryFn: getUserStatus,
  });

  return data.body;
};
