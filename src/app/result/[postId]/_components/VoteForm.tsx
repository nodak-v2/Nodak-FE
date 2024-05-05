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
    <form className='flex flex-col rounded-md bg-dark-accent2 p-4 text-gray-accent1'>
      <span className='pb-8 text-xl font-bold'>{title}</span>
      <ul className='flex flex-col gap-4'>
        {options.map((content, index) => (
          <li
            key={`${index}-${content}`}
            className='cursor-pointer rounded-md border-2 border-gray-accent1 bg-dark-accent1 p-4 '
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
