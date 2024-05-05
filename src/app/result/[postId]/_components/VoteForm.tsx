'use client';

interface Props {
  title: string;
  options: string[];
}

const VoteBlockForm = ({ title, options }: Props) => {
  const handleClick = (index: number) => {
    // TODO: 투표 post 요청
    console.log(index);
  };

  return (
    <form className='flex flex-col gap-3 rounded-md bg-dark-accent2 p-4 text-white'>
      <span className='pb-4 text-xl font-bold'>{title}</span>
      <ul>
        {options.map((content, index) => (
          <li
            key={`${index}-${content}`}
            className='mb-4 cursor-pointer rounded-md border-2 border-white bg-dark-accent1 p-4 '
            onClick={() => handleClick(index)}
          >
            {content}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default VoteBlockForm;
