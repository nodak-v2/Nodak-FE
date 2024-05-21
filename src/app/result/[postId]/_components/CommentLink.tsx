import Link from 'next/link';

import Icon from '@/src/components/Icon';

interface CommentLinkProps {
  postId: string;
}

const CommentLink = ({ postId }: CommentLinkProps) => {
  return (
    <Link href={`comments/${postId}`}>
      <Icon id='comment' size={24} />
    </Link>
  );
};

export default CommentLink;
