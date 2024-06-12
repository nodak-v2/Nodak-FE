'use client';

import { useParams } from 'next/navigation';

import { useGetCommentsAPI } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';

import CommentItem from '../_components/CommentInfo';
import PostComment from '../_components/PostComment';

// interface CommentPageProps {
//   params: { postId: string };
// }

const CommentPage = () => {
  // const cookieHeader = cookies();
  // 쿠키가 undefined 출력됨
  const { postId } = useParams() as { postId: string };
  const userStatus = useGetUserStatusAPI();
  const commentData = useGetCommentsAPI(postId);

  console.log(userStatus);
  return (
    <>
      <div className='h-full grow overflow-y-auto'>
        {commentData.length > 0 ? (
          commentData.map(
            ({ nickname, profileImageUrl, content, createdAt }, index) => (
              <CommentItem
                key={index}
                nickname={nickname}
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

export default CommentPage;
