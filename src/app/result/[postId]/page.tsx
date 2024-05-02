import { getPostDetail } from '@/src/apis/post';

const Page = async () => {
  const postDetail = await getPostDetail(1);

  return <div>{JSON.stringify(postDetail)}</div>;
};

export default Page;
