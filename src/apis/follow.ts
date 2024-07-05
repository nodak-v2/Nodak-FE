import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { api } from './core';

export interface Follow {
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  introduction: string;
  createdAt: string;
  updatedAt: string;
  postCount: number;
  voteCount: number;
  commentCount: number;
  likeCount: number;
  followerCount: number;
  followeeCount: number;
  isFollowing: boolean;
}

const getFollowersByMe = () => {
  return api.get<Follow[]>({
    url: '/followers',
  });
};

const getFolloweesByMe = () => {
  return api.get<Follow[]>({
    url: 'followees',
  });
};

export const useGetFollowersAPI = (userId?: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['followers', userId],
    queryFn: () => {
      if (!userId) return getFollowersByMe();
      else return getFollowersByMe(); // TODO: getFollowersByUserId 로 변경
    },
  });

  return data.body;
};

export const useGetFolloweesAPI = (userId?: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['followees', userId],
    queryFn: () => {
      if (!userId) return getFolloweesByMe();
      else return getFolloweesByMe(); // TODO: getFolloweesByUserId 로 변경
    },
  });

  return data.body;
};

const postFollow = (userId: string) => {
  return api.post({
    url: `/follow/${userId}`,
  });
};

const deleteFollow = (userId: string) => {
  return api.delete({
    url: `/unfollow/${userId}`,
  });
};

type MutationParam<T> = T extends string ? void : string;

export const usePostFollowAPI = <TUserId>(initialUserId?: TUserId) => {
  const QueryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (userId: MutationParam<TUserId>) =>
      postFollow((initialUserId ?? userId) as string),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ['profile', initialUserId],
      });
      QueryClient.invalidateQueries({
        queryKey: ['followees', initialUserId],
      });
    },
  });

  return mutateAsync;
};

export const useDeleteFollowAPI = <TUserId>(initialUserId?: TUserId) => {
  const QueryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (userId: MutationParam<TUserId>) =>
      deleteFollow((initialUserId ?? userId) as string),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ['profile', initialUserId],
      });
      QueryClient.invalidateQueries({
        queryKey: ['followees', initialUserId],
      });
    },
  });

  return mutateAsync;
};
