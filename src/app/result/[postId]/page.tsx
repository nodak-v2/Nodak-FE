import { getPostDetail } from '@/src/apis/post';
import { getVoteResult } from '@/src/apis/vote';
import CommentLink from '@/src/app/result/[postId]/_components/CommentLink';
import EditLinks from '@/src/app/result/[postId]/_components/EditLinks';
import FavoriteButton from '@/src/app/result/[postId]/_components/FavoriteButton';
import ProfileBlock from '@/src/app/result/[postId]/_components/ProfileBlock';
import VoteForm from '@/src/app/result/[postId]/_components/VoteForm';
import VoteProgress from '@/src/app/result/[postId]/_components/VoteProgress';

const isAuthor = false;
const isSignin = false;

interface ResultPageProps {
  params: { postId: string };
}

const ResultPage = async ({ params: { postId } }: ResultPageProps) => {
  const {
    author,
    profileImageUrl,
    title,
    date,
    content,
    starCount,
    checkStar: isCheckStar,
    voteInfo: { hasVoted, voteTitle, options },
  } = await getPostDetail(postId);
  const { options: resultOptions, totalNumber } = await getVoteResult(postId);

  return (
    <div className='flex h-full flex-col'>
      <ProfileBlock name={author} imageUrl={profileImageUrl} />
      <div className='pb-4'>
        <p className='text-xl font-bold'>{title}</p>
        <p className='pl-1 text-xs text-gray-accent2'>{date}</p>
      </div>
      <p className='pb-4'>{content}</p>
      {isAuthor && <EditLinks rewriteHref='rewrite' deleteHref='delete' />}
      {isSignin && hasVoted ? (
        <VoteProgress
          title={voteTitle}
          options={resultOptions}
          totalNumber={totalNumber}
        />
      ) : (
        <VoteForm title={voteTitle} options={options} />
      )}
      <div className='flex items-center gap-1 pt-8'>
        <FavoriteButton postId={postId} isChecked={isCheckStar} />
        <span className='pr-2'>{starCount}</span>
        <CommentLink href='posts' />
        <span>{totalNumber}</span>
      </div>
    </div>
  );
};

export default ResultPage;
