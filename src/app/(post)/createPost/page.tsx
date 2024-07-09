import TopBar from '../../../components/Topbar';
import PostForm from './_components/PostForm';

const CreatePostPage = () => {
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <TopBar.Title>투표 만들기</TopBar.Title>
      </TopBar.Container>
      <PostForm />
    </>
  );
};

export default CreatePostPage;
