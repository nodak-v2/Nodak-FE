import Button from '@/src/app/_components/Button/Button';

interface Props {
  title: string;
  options: string[];
}

const VoteBlock = ({ title, options }: Props) => {
  return (
    <div className='flex flex-col gap-3 rounded-md bg-dark-accent2 p-4'>
      <p className='pb-4 font-bold'>{title}</p>
      {options.map((item, index) => (
        <Button key={`${index}-${item}`} className='text-start'>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default VoteBlock;
