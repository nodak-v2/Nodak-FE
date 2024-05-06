import Link from 'next/link';

import Icon from '@/src/components/Icon';

interface CommentLinkProps {
  href: string;
}

const CommentLink = ({ href }: CommentLinkProps) => {
  return (
    <Link href={href}>
      <Icon id='comment' size={24} />
    </Link>
  );
};

export default CommentLink;
