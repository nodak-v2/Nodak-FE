// import { getVoteResult } from '@/src/apis/vote';
// import VoteBlockForm from '@/src/app/(post)/result/[postId]/_components/VoteBlock/VoteBlockForm';
// import VoteProgress from '@/src/app/(post)/result/[postId]/_components/VoteBlock/VoteProgress';

// interface VoteBlockProps {
//   voteId: number;
// }

// const VoteBlock = async ({ voteId }: VoteBlockProps) => {
//   const { hasVoted, voteTitle, voteOptions, totalNumber } =
//     await getVoteResult(voteId);

//   const formOptions = voteOptions.map(option => option.voteOptionContent);
//   const progressOptions = voteOptions.map(
//     ({ seq, voteOptionContent, count }) => ({
//       seq,
//       content: voteOptionContent,
//       count,
//     }),
//   );

//   return (
//     <>
//       {hasVoted ? (
//         <VoteProgress
//           title={voteTitle}
//           options={progressOptions}
//           totalNumber={totalNumber}
//         />
//       ) : (
//         <VoteBlockForm
//           title={voteTitle}
//           options={formOptions}
//           voteId={voteId}
//         />
//       )}
//     </>
//   );
// };

// export default VoteBlock;
