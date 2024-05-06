import Link from 'next/link';

interface EditLinksProps {
  rewriteHref: string;
  deleteHref: string;
}

const EditLinks = ({ rewriteHref, deleteHref }: EditLinksProps) => {
  return (
    <div className='flex justify-end gap-2 p-2'>
      <Link href={rewriteHref}>수정</Link>
      <Link href={deleteHref}>삭제</Link>
    </div>
  );
};

export default EditLinks;
