import type { Metadata } from 'next';

import { MSWComponent } from '@/src/mocks/MSWComponent';

import Introduction from './_components/Introduction';
import './globals.css';

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
        <MSWComponent>
          <div className='flex h-screen w-screen flex-row items-center justify-center gap-10'>
            <div className='hidden shrink sm:flex'>
              <Introduction />
            </div>
            <div
              id='layout-Root'
              className='relative flex h-full max-h-[950px] min-h-[600px] w-full min-w-[350px] max-w-[450px] shrink-0 flex-col bg-dark-accent2 shadow-xl'
            >
              {children}
            </div>
          </div>
        </MSWComponent>
      </body>
    </html>
  );
};
export default RootLayout;
