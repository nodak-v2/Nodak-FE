import Icon from '@/src/components/Icon';
import { IconName } from '@/src/components/Icon/type';

interface PostingIconProps {
  icon: IconName;
  name: string;
}

const PostingIcon = ({ icon, name }: PostingIconProps) => {
  return (
    <div className='flex items-center gap-3'>
      <Icon id={icon} size={16} />
      <span className='font-h3-sm-bold'>{name}</span>
    </div>
  );
};

const MyVote = () => {
  const postingCategory: { icon: IconName; name: string }[] = [
    { icon: 'write', name: '작성 글' },
    { icon: 'check-circle', name: '투표 내역' },
    { icon: 'like', name: '좋아한 투표' },
    { icon: 'message-2', name: '내 댓글' },
  ];

  return (
    <div className='flex flex-col gap-4 px-4'>
      <span className='text-gray-accent3 font-h4-sm-bold'>나의 투표</span>
      {postingCategory.map(({ icon, name }, index) => (
        <PostingIcon icon={icon} name={name} key={`${name} - ${index}`} />
      ))}
    </div>
  );
};

export default MyVote;
