import Link from 'next/link';

import TopBar from '../../../components/Topbar';
import PostForm from './_components/PostForm';

const CreatePostPage = () => {
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <TopBar.Title>투표 만들기</TopBar.Title>
        <Link className=' font-title-1-md text-primary' href='/'>
          <span>등록</span>
        </Link>
      </TopBar.Container>
      <PostForm />
    </>
  );
};

export default CreatePostPage;
