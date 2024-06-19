import TopBar from '../../../components/Topbar';
import PostForm from './_component/PostForm';

const CreatePostPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
      </TopBar.Container>
      <PostForm />
    </div>
  );
};

export default CreatePostPage;
