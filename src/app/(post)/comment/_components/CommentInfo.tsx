import Image from 'next/image';
import { useRouter } from 'next/navigation';

import timeOffset from '@/src/utils/timeOffset';

interface CommentInfoProps {
  profileImageUrl?: string;
  nickname: string;
  content: string;
  createdAt: Date;
}
const CommentInfo = ({
  nickname,
  profileImageUrl = '/SlideD1.webp',
  content,
  createdAt,
}: CommentInfoProps) => {
  const router = useRouter();

  return (
    <div className='flex gap-4 border-b p-4'>
      <Image
        src={profileImageUrl}
        alt='프로필 이미지'
        width={64}
        height={64}
        layout='fixed'
        className='cursor-pointer rounded-full object-cover'
        onClick={() => router.push('/profile/1')}
      />
      <div className='flex w-full flex-col gap-2'>
        <div className='flex justify-between'>
          <span className='grow text-xl font-bold'>{nickname}</span>
          <span className='text-sm text-gray-accent2'>
            {timeOffset(createdAt)}
          </span>
        </div>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default CommentInfo;
