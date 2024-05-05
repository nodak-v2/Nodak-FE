const PostComment = () => {
  return (
    <div className='flex h-12'>
      <input
        type='text'
        className='flex-grow border-t-2 p-4 focus:outline-none'
        placeholder='댓글을 입력해주세요.'
      />
      <button className='w-16 bg-gray-accent2 text-white hover:brightness-90'>
        등록
      </button>
    </div>
  );
};

export default PostComment;
