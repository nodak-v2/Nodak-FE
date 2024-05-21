import Image from 'next/image';

interface CommentInfoProps {
  nickname: string;
  profileImageUrl: string;
  commentText: string;
  createdAt: Date;
}
const CommentInfo = ({
  nickname,
  profileImageUrl,
  commentText,
  createdAt,
}: CommentInfoProps) => {
  const GMTTime = 9 * 60 * 60 * 1000;

  return (
    <div className='flex flex-col border-b'>
      <div className='flex justify-around gap-4 p-2'>
        <div className='flex-shrink-0'>
          <Image
            src={profileImageUrl}
            alt='프로필 이미지'
            width={64}
            height={64}
            layout='fixed'
            className='rounded-full object-cover'
          />
        </div>
        <div className='grow'>
          <div className='flex flex-row items-start'>
            <span className='grow text-xl font-bold'>{nickname}</span>
            <span className='text-sm text-gray-accent2'>
              {new Date(createdAt.getTime() + GMTTime)
                .toISOString()
                .replace('T', ' ')
                .slice(0, -8)}
            </span>
          </div>
          <div>
            <span>{commentText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentInfo;
