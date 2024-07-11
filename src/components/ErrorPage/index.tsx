import Icon from '../Icon';

interface ErrorPageProps {
  errorMessage: string;
  text: string;
  buttonContent: string;
  onClick: () => void;
}

const ErrorPage = ({
  errorMessage,
  text,
  onClick,
  buttonContent,
}: ErrorPageProps) => {
  let errorText = 'ERROR';

  if (errorMessage.includes('NetworkError')) {
    errorText = 'NETWORK ERROR';
  } else if (errorMessage.includes('404')) {
    errorText = '404 ERROR';
  } else if (errorMessage.includes('500')) {
    errorText = 'SERVER ERROR';
  }

  return (
    <div className='flex h-full grow flex-col items-center justify-center gap-3'>
      <Icon id={'warning'} aria-label='오류 발생' size={64} />
      <span className='text-4xl font-semibold text-gray-accent2'>
        {errorText}
      </span>
      <span className='font-h3-bold text-gray-accent3'>{text}</span>
      <button
        onClick={onClick}
        className='text-h3-sm mt-[28px] flex items-center justify-center rounded-[28px] bg-primary px-6 py-3'
      >
        {buttonContent}
      </button>
    </div>
  );
};

export default ErrorPage;
