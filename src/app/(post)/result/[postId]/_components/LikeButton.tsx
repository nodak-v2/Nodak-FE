// 'use client';

// import { updateLike } from '@/src/app/(post)/result/[postId]/actions';
// import Icon from '@/src/components/Icon';

// interface LikeButtonProps {
//   postId: string;
//   isChecked: boolean;
// }

// const LikeButton = ({ postId, isChecked }: LikeButtonProps) => {
//   const updateLikeWithArgs = updateLike.bind(null, { postId, isChecked });

//   return (
//     <form action={updateLikeWithArgs}>
//       <button>
//         <Icon
//           id={isChecked ? 'heart-fill' : 'heart'}
//           size={24}
//           className='text-pink-500'
//         />
//       </button>
//     </form>
//   );
// };

// export default LikeButton;
