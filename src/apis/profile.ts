import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import Toast from '../components/Toast';
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
  badge: Badge;
}

export interface Badge {
  posting: number;
  follow: number;
  voting: number;
  comment: number;
  like: number;
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
      Toast.default('저장되었습니다.');
    },
    onError: () => {
      Toast.default('저장에 실패했습니다.');
    },
  });

  return mutateAsync;
};
