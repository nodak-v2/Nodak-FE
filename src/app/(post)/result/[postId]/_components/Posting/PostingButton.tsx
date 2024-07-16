import { useCallback, useState } from 'react';

import debounce from 'lodash/debounce';
import { useParams, useRouter } from 'next/navigation';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import { useGetPostDetailAPI } from '@/src/apis/postDetail';
import Icon from '@/src/components/Icon';
import Toast from '@/src/components/Toast';

import { usePostingLike } from '../../hooks/usePostingLike';

const CategoryChip = ({ category }: { category: string }) => {
  return (
    <div className='font-text-2-md flex items-center rounded-[30px] border border-gray-accent2 px-3 py-0.5 text-gray-accent4'>
      {category}
    </div>
  );
};

const PostingButton = () => {
  const { postId } = useParams() as { postId: string };
  const {
    starCount: initialLikeCount,
    commentSize,
    checkStar: isInitialIsLikeState,
    categoryName,
  } = useGetPostDetailAPI(postId);
  const router = useRouter();
  const { login: isLogin } = useGetUserStatusAPI();

  const { postLike, deleteLike } = usePostingLike(postId);

  const [star, setStar] = useState({
    count: initialLikeCount,
    check: isInitialIsLikeState,
  });

  const debouncedLikeUpdate = useCallback(
    debounce((isLike: boolean) => {
      isLike ? deleteLike() : postLike();
    }, 1000),
    [],
  );

  const handleLike = async () => {
    if (isLogin) {
      debouncedLikeUpdate(star.check);
      setStar(prevStar => ({
        count: prevStar.check ? prevStar.count - 1 : prevStar.count + 1,
        check: !prevStar.check,
      }));
    } else {
      router.push('/signin');
      Toast.default('로그인이 필요합니다.');
    }
  };

  return (
    <div className='flex justify-between px-4'>
      <CategoryChip category={categoryName} />
      <div className='flex items-center gap-3'>
        <div
          className='flex cursor-pointer items-center gap-2'
          onClick={handleLike}
        >
          {star.check ? (
            <Icon id='heart-fill' size={24} />
          ) : (
            <Icon id='heart-line' size={24} />
          )}
          <span className='font-text-1-rg'>{star.count}</span>
        </div>
        <div className='flex items-center gap-2'>
          <Icon id='message' size={24} />
          <span className='font-text-1-rg'>{commentSize}</span>
        </div>
      </div>
    </div>
  );
};

export default PostingButton;
