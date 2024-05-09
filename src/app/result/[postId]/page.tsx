import { getPostDetail } from '@/src/apis/post';
import { getVoteResult } from '@/src/apis/vote';
import CommentLink from '@/src/app/result/[postId]/_components/CommentLink';
import EditLinks from '@/src/app/result/[postId]/_components/EditLinks';
import LikeIcon from '@/src/app/result/[postId]/_components/LikeIcon';
import ProfileBlock from '@/src/app/result/[postId]/_components/ProfileBlock';
import VoteForm from '@/src/app/result/[postId]/_components/VoteForm';
import VoteProgress from '@/src/app/result/[postId]/_components/VoteProgress';

interface ResultPageProps {
  params: { postId: string };
}

const ResultPage = async ({ params: { postId } }: ResultPageProps) => {
  const {
    author,
    isAuthor,
    profileImageUrl,
    title,
    date,
    content,
    starCount,
    checkStar: isCheckStar,
    voteInfo: { hasVoted, voteTitle, options, voteId },
  } = await getPostDetail(postId);

  const { options: resultOptions, totalNumber } = await getVoteResult(postId);

  return (
    <div className='flex h-full grow flex-col gap-2 overscroll-y-auto'>
      <ProfileBlock name={author} imageUrl={profileImageUrl} />
      <div className='flex flex-col p-4'>
        <span className='text-xl font-bold'>{title}</span>
        <span className='pl-1 text-xs text-gray-accent2'>{date}</span>
      </div>
      <p className='break-words p-4'>{content}</p>
      {isAuthor && <EditLinks postId={postId} />}
      {hasVoted ? (
        <VoteProgress
          title={voteTitle}
          options={resultOptions}
          totalNumber={totalNumber}
        />
      ) : (
        <VoteForm title={voteTitle} options={options} voteId={voteId} />
      )}
      <div className='flex items-center gap-1 p-4'>
        <div className='flex gap-0.5'>
          <LikeIcon postId={postId} isChecked={isCheckStar} />
          <span className='pr-2'>{starCount}</span>
        </div>
        <div className='flex gap-0.5'>
          <CommentLink postId={postId} />
          <span>{totalNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
