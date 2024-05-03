import Image from 'next/image';

interface Props {
  name: string;
  imageUrl: string;
}

const ProfileBlock = ({ name, imageUrl }: Props) => {
  return (
    <div className='flex w-full items-center justify-start gap-4 p-4'>
      <Image
        src={imageUrl}
        alt={`${name}님의 프로필 이미지`}
        width={40}
        height={40}
        className='rounded-full object-cover'
      />
      <p className=' self-center text-sm font-bold'>{name}</p>
    </div>
  );
};

export default ProfileBlock;
