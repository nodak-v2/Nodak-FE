import Image from 'next/image';

interface ProfileBlockProps {
  profileImage: string | null;
  userName: string;
}

const ProfileBlock = ({ profileImage, userName }: ProfileBlockProps) => {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src={profileImage || '/user-profile.png'}
        alt='유저이미지'
        width={30}
        height={30}
        className='min-h-[30px] min-w-[30px] rounded-[8px]'
      />
      <span className='font-title-1-md'>{userName}</span>
    </div>
  );
};

export default ProfileBlock;
