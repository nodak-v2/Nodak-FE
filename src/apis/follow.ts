import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { api } from './core';

export interface FollowInfo {
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
  return api.get<FollowInfo[]>({
    url: '/followers',
  });
};

const getFolloweesByMe = () => {
  return api.get<FollowInfo[]>({
    url: '/followees',
  });
};

const getFollowersByUserId = (userId: string) => {
  return api.get<FollowInfo[]>({
    url: `/followers/${userId}`,
  });
};

const getFolloweesByUserId = (userId: string) => {
  return api.get<FollowInfo[]>({
    url: `/followees/${userId}`,
  });
};

export const useGetFollowersAPI = (userId?: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['followers', userId],
    queryFn: () => {
      if (!userId) return getFollowersByMe();
      else return getFollowersByUserId(userId);
    },
  });

  return data.body;
};

export const useGetFolloweesAPI = (userId?: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['followees', userId],
    queryFn: () => {
      if (!userId) return getFolloweesByMe();
      else return getFolloweesByUserId(userId);
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

export const usePostFollowAPI = (userId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: () => postFollow(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile', userId],
      });
      queryClient.invalidateQueries({
        queryKey: ['followees', userId],
      });
    },
  });

  return mutateAsync;
};

export const useDeleteFollowAPI = (userId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: () => deleteFollow(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile', userId],
      });
      queryClient.invalidateQueries({
        queryKey: ['followees', userId],
      });
    },
  });

  return mutateAsync;
};
