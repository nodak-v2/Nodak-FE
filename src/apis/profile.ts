import { GetData } from './comments';

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
export const getProfile = async (userId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
  );
  const data = (await response.json()) as GetData<ProfileResponse>;
  console.log(data.body);
  return data.body;
};
