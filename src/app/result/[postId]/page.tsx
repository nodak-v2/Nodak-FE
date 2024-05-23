import { getPostDetail } from '@/src/apis/post';
import CommentLink from '@/src/app/result/[postId]/_components/CommentLink';
import EditLinks from '@/src/app/result/[postId]/_components/EditLinks';
import LikeButton from '@/src/app/result/[postId]/_components/LikeButton';
import ProfileBlock from '@/src/app/result/[postId]/_components/ProfileBlock';
import VoteBlock from '@/src/app/result/[postId]/_components/VoteBlock';

interface ResultPageProps {
  params: { postId: string };
  searchParams: { voteId: string };
}

const ResultPage = async ({
  params: { postId },
  searchParams: { voteId },
}: ResultPageProps) => {
  const {
    author,
    isAuthor,
    profileImageUrl,
    title,
    createdAt,
    content,
    starCount,
    commentSize,
    checkStar: isCheckStar,
  } = await getPostDetail(postId);

  return (
    <div className='flex h-full grow flex-col gap-2 overscroll-y-auto'>
      <ProfileBlock name={author} imageUrl={profileImageUrl} />
      <div className='flex flex-col p-4'>
        <span className='text-xl font-bold'>{title}</span>
        <span className='pl-1 text-xs text-gray-accent2'>{createdAt}</span>
      </div>
      <p className='break-words p-4'>{content}</p>
      {isAuthor && <EditLinks postId={postId} />}
      <VoteBlock voteId={+voteId} />
      <div className='flex items-center gap-1 p-4'>
        <div className='flex gap-0.5'>
          <LikeButton postId={postId} isChecked={isCheckStar} />
          <span className='pr-2'>{starCount}</span>
        </div>
        <div className='flex gap-0.5'>
          <CommentLink postId={postId} />
          <span>{commentSize}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
