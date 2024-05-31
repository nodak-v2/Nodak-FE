import TopBar from '../_components/Topbar';
import PostForm from './_component/PostForm';

const CreatePostPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <TopBar.Container>
        <TopBar.Left>
          <TopBar.BackButton href='/' />
        </TopBar.Left>
      </TopBar.Container>
      <PostForm />
    </div>
  );
};

export default CreatePostPage;
