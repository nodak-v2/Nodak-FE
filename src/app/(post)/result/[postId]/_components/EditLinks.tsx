import Link from 'next/link';

interface EditLinksProps {
  postId: string;
}

const EditLinks = ({ postId }: EditLinksProps) => {
  return (
    <div className='flex justify-end gap-2 p-2'>
      <Link href={`rewrite/${postId}`}>수정</Link>
      <Link href={`delete/${postId}`}>삭제</Link>
    </div>
  );
};

export default EditLinks;
