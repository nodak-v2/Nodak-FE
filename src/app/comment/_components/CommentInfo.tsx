import Image from 'next/image';

import timeOffset from '@/src/utils/timeOffset';

interface CommentInfoProps {
  profileImageUrl?: string;
  writerName: string;
  content: string;
  createdAt: Date;
}
const CommentInfo = ({
  writerName,
  profileImageUrl = '/SlideD1.webp',
  content,
  createdAt,
}: CommentInfoProps) => {
  return (
    <div className='flex gap-4 border-b p-4'>
      <Image
        src={profileImageUrl}
        alt='프로필 이미지'
        width={64}
        height={64}
        layout='fixed'
        className='rounded-full object-cover'
      />
      <div className='flex w-full flex-col gap-2'>
        <div className='flex justify-between'>
          <span className='grow text-xl font-bold'>{writerName}</span>
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
