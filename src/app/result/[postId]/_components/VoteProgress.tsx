import { getVoteResult } from '@/src/apis/vote';

interface VoteProgressProps {
  voteId: number;
}

const VoteProgress = async ({ voteId }: VoteProgressProps) => {
  const { title, options, totalNumber } = await getVoteResult(voteId);
  const percentageOf = (count: number) => (count / totalNumber) * 100;

  return (
    <div className='flex flex-col rounded-md bg-dark-accent2 p-4 text-gray-accent1'>
      <span className='pb-8 text-xl font-bold'>{title}</span>
      <ul className='flex flex-col gap-4'>
        {options.map(({ seq, content, count }) => (
          <li key={`${seq}-${content}`} className='relative'>
            <div
              className='absolute bottom-0 top-0 block bg-dark-accent1'
              style={{ width: `${percentageOf(count)}%` }}
            />
            <div className='relative z-10 flex justify-between rounded-md border-2 border-gray-accent1 bg-opacity-0 p-4 '>
              <span>{content}</span>
              <span>{`${percentageOf(count).toFixed(0)} %`}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoteProgress;
