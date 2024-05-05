interface Option {
  seq: number;
  content: string;
  count: number;
}

interface Props {
  title: string;
  options: Option[];
  totalNumber: number;
}

const VoteProgress = ({ title, options, totalNumber }: Props) => {
  const totalPer = (count: number) => {
    return (count / totalNumber) * 100;
  };

  return (
    <div className='flex flex-col gap-3 rounded-md bg-dark-accent2 p-4 text-white'>
      <span className='pb-4 text-xl font-bold'>{title}</span>
      <ul>
        {options.map(({ seq, content, count }) => (
          <li key={seq} className='relative'>
            <span
              className='absolute bottom-0 left-0 right-0 top-0 block bg-dark-accent1'
              style={{ width: `${totalPer(count)}%` }}
            />
            <div className='relative z-10 mb-4 flex justify-between rounded-md border-2 border-white bg-opacity-0 p-4 '>
              <span>{content}</span>
              <span>{`${totalPer(count).toFixed(0)} %`}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoteProgress;
