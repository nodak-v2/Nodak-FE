import Link from 'next/link';

import Icon from '@/src/components/Icon';

const CommentLink = () => {
  return (
    <Link href={`/`}>
      <Icon id='comment' size={24} />
    </Link>
  );
};

export default CommentLink;
