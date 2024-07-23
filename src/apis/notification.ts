import { useQuery } from '@tanstack/react-query';

import { api } from '@/src/apis/core';

export interface Notification {
  type: 'POST' | 'FOLLOW';
  followerId?: number;
  followerName?: string;
  writerId?: number;
  writerName?: string;
  postId?: number;
  timestamp: number;
}

const getNotifications = () => {
  return api.get<Notification[]>({
    url: '/notifications',
  });
};

const INTERVAL_MS = 5000;

export const useGetNotificationsAPI = () => {
  const { data } = useQuery({
    queryKey: ['notifications'],
    queryFn: getNotifications,
    refetchInterval: INTERVAL_MS,
  });

  return data?.body;
};
