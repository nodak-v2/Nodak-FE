import CommentList from './_components/CommentInfo';
import PostComment from './_components/PostComment';

const commentData = [
  {
    nickname: 'John Doe',
    profileImageUrl: 'https://via.placeholder.com/150',
    commentText: 'This is a text Comment Text.',
    createdAt: new Date('2024-01-01 08:34'),
  },
  {
    nickname: 'Jane Doe',
    profileImageUrl: 'https://via.placeholder.com/150',
    commentText: 'This is another text Comment Text.',
    createdAt: new Date('2024-01-01 11:34'),
  },
];

const commentPage = () => {
  return (
    <>
      <h1>TopBar</h1>
      <div className='flex-grow overflow-auto'>
        {commentData.length > 0 ? (
          commentData.map(
            ({ nickname, profileImageUrl, commentText, createdAt }, index) => (
              <CommentList
                key={index}
                nickname={nickname}
                profileImageUrl={profileImageUrl}
                commentText={commentText}
                createdAt={createdAt}
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
