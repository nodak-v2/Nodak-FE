import TopBar from '../../../components/Topbar';
import PostForm from './_component/PostForm';

const CreatePostPage = () => {
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
      </TopBar.Container>
      <PostForm />
    </>
  );
};

export default CreatePostPage;
