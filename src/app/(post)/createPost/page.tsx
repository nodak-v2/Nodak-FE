import Link from 'next/link';

import TopBar from '../../../components/Topbar';
import PostForm from './_component/PostForm';

const CreatePostPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <TopBar.Container>
        <TopBar.Left>
          <TopBar.BackButton href='/' />
        </TopBar.Left>
        <TopBar.Title>투표 만들기</TopBar.Title>
        <TopBar.Right>
          <Link className=' font-title-1-md text-primary' href='/'>
            <span>등록</span>
          </Link>
        </TopBar.Right>
      </TopBar.Container>
      <PostForm />
    </div>
  );
};

export default CreatePostPage;
