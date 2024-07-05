import { useQueryClient } from '@tanstack/react-query';

import { useDeleteFollowAPI, usePostFollowAPI } from '@/src/apis/follow';
import ProfileBlock from '@/src/app/social/_components/ProfileBlock';
import Button from '@/src/components/Button/Button';

interface UserListProps {
  users: {
    nickname: string;
    profileImageUrl: string | null;
    isFollowing: boolean;
    userId: number;
  }[];
}

const FollowList = ({ users }: UserListProps) => {
  const postFollow = usePostFollowAPI();
  const deleteFollow = useDeleteFollowAPI();

  const QueryClient = useQueryClient();

  const handlePostFollowClick = (userId: number) => () => {
    postFollow(userId.toString(), {
      onSuccess: () => {
        QueryClient.invalidateQueries({
          queryKey: ['profile', userId],
        });
        QueryClient.invalidateQueries({
          queryKey: ['followees', userId],
        });
      },
    });
  };

  const handleDeleteFollowClick = (userId: number) => () =>
    deleteFollow(userId.toString(), {
      onSuccess: () => {
        QueryClient.invalidateQueries({
          queryKey: ['profile', userId],
        });
        QueryClient.invalidateQueries({
          queryKey: ['followees', userId],
        });
      },
    });

  return (
    <ul className='flex flex-col gap-4'>
      {users.map(
        ({ nickname, profileImageUrl, isFollowing, userId }, index) => (
          <div key={`${nickname}-${index}`} className='flex justify-between'>
            <ProfileBlock userName={nickname} profileImage={profileImageUrl} />
            {isFollowing ? (
              <Button
                className='font-title-1-md w-[90px]  py-2'
                baseColor='primaryInverted'
                onClick={handleDeleteFollowClick(userId)}
              >
                팔로잉
              </Button>
            ) : (
              <Button
                className='font-title-1-md w-[90px] py-2'
                baseColor='primary'
                onClick={handlePostFollowClick(userId)}
              >
                팔로우
              </Button>
            )}
          </div>
        ),
      )}
    </ul>
  );
};

export default FollowList;
