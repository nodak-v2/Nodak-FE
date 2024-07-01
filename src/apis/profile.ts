import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { api } from './core';
import { PostListContent } from './postList';

export interface ProfileResponse {
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  postCount: number;
  followerCount: number;
  followeeCount: number;
  isFollowing: boolean;
  posts: PostListContent[];
}

export interface ProfilePatchRequest {
  nickname: string;
  profileImageUrl: string | null;
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

const patchUserProfile = (profileBody: ProfilePatchRequest) =>
  api.patch({
    url: `/user`,
    data: profileBody,
  });

export const usePatchUserProfileAPI = () => {
  const QueryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (data: ProfilePatchRequest) => patchUserProfile(data),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['status'] });
    },
  });

  return mutateAsync;
};
