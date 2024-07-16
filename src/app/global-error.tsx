'use client';

export interface ErrorFallBackProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError = ({ reset }: ErrorFallBackProps) => {
  return (
    <html>
      <body>
        <h2>어플리케이션에 오류가 발생했습니다.</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
