import Link from 'next/link';

import Icon from '@/src/components/Icon';
import { IconName } from '@/src/components/Icon/type';

import { PostingNavigation } from '../(posting)/layout';

interface PostingIconProps {
  icon: IconName;
  name: string;
  routingPath: PostingNavigation;
}

const postingCategory: PostingIconProps[] = [
  { icon: 'write', name: '작성 글', routingPath: 'myPosting' },
  { icon: 'check-circle', name: '투표 내역', routingPath: 'myVoteHistory' },
  { icon: 'like', name: '좋아한 투표', routingPath: 'myLike' },
  { icon: 'message-2', name: '내 댓글', routingPath: 'myComment' },
];

const PostingIcon = ({ icon, name, routingPath }: PostingIconProps) => {
  return (
    <Link
      href={`/users/profile/${routingPath}`}
      className='flex w-fit cursor-pointer items-center gap-3'
    >
      <Icon id={icon} size={16} />
      <span className='font-h3-sm'>{name}</span>
    </Link>
  );
};

const MyVote = () => {
  return (
    <div className='flex flex-col gap-4 px-4'>
      <span className='font-h4-sm-bold text-gray-accent3'>나의 투표</span>
      {postingCategory.map(({ icon, name, routingPath }, index) => (
        <PostingIcon
          icon={icon}
          name={name}
          routingPath={routingPath}
          key={`${name} - ${index}`}
        />
      ))}
    </div>
  );
};

export default MyVote;
