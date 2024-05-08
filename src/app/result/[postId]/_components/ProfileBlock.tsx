import Image from 'next/image';

interface ProfileBlockProps {
  name: string;
  imageUrl?: string;
}

const ProfileBlock = ({
  name,
  imageUrl = 'https://via.placeholder.com/40',
}: ProfileBlockProps) => {
  return (
    <div className='flex w-full items-center gap-4 p-4 pb-4'>
      <Image
        id={name}
        src={imageUrl}
        alt={`${name}님의 프로필 이미지`}
        width={40}
        height={40}
        className='rounded-full object-cover'
        onError={e => {
          throw new Error(`image load error: ${e.currentTarget.id}`);
        }}
      />
      <span className='text-sm font-bold text-gray-accent1'>{name}</span>
    </div>
  );
};

export default ProfileBlock;
