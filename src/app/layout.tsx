import type { Metadata } from 'next';

import '../style/globals.css';
import Introduction from './_components/Introduction';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      <body>
        <div className='lex-row flex h-screen w-screen items-center justify-center gap-10 text-white'>
          <div className='hidden shrink sm:flex'>
            <Introduction />
          </div>
          <div className='relative flex h-full max-h-[950px] min-h-[600px] w-full min-w-[350px] max-w-[450px] shrink-0 flex-col bg-[#212529] shadow-xl'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
