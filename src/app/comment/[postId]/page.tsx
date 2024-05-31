import { getComments } from '@/src/apis/comments';

import CommentItem from '../_components/CommentInfo';
import PostComment from '../_components/PostComment';

interface CommentPageProps {
  params: { postId: string };
}

const commentPage = async ({ params: { postId } }: CommentPageProps) => {
  const commentData = await getComments(postId);

  return (
    <>
      <div className='h-full grow overflow-y-auto'>
        {commentData.body.length > 0 ? (
          commentData.body.map(
            ({ writerName, profileImageUrl, content, createdAt }, index) => (
              <CommentItem
                key={index}
                writerName={writerName}
                profileImageUrl={profileImageUrl ? profileImageUrl : undefined}
                content={content}
                createdAt={new Date(createdAt)}
              />
            ),
          )
        ) : (
          <div className='flex h-full items-center justify-center'>
            <p className='text-gray-accent2'>아직 작성된 댓글이 없습니다.</p>
          </div>
        )}
      </div>
      <PostComment />
    </>
  );
};

export default commentPage;
