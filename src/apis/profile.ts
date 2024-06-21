import { useSuspenseQuery } from '@tanstack/react-query';

import { api } from './core';

// interface ProfileResponse {
//   email: string;
//   nickname: string;
//   profileImageUrl: string;
//   introduction: string;
//   createdAt: string;
//   updatedAt: string;
//   followerCount: number;
//   followeeCount: number;
// }

export interface Body {
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

// export const getProfile = async (userId: string) => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
//   );
//   const data = (await response.json()) as GetData<ProfileResponse>;
//   console.log(data.body);
//   return data.body;
// };

const getProfile = (userId: string) => {
  return api.get<Body>({
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
