import { useSuspenseQuery } from '@tanstack/react-query';

import { api } from './core';

export interface ProfileResponse {
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  postCount: number;
  followerCount: number;
  followeeCount: number;
  isFollowing: boolean;
  posts: Post[];
}

export interface Post {
  postId: number;
  voteId: number;
  title: string;
  commentCount: number;
  likeCount: number;
  voterCount: number;
  author: string;
  profileImageUrl: string;
  postImageUrl: string;
  createdAt: string;
  startDate: string;
  endDate: string;
  voteOptions: string[];
  terminated: boolean;
}

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
