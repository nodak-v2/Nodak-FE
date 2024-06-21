import type { Metadata, Viewport } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Introduction from '../components/Introduction';
import { MSWComponent } from '../mocks/MSWComponent';
import Providers from './Providers';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: '노닥노닥',
  description: '투표 플랫폼 노닥노닥 - COPYRIGHT ©nodaknodak',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.ico',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      <link rel='icon' href='/icon.ico' sizes='any' />
      <body className='font-sans'>
        <Providers>
          <MSWComponent>
            <div className='flex h-screen w-screen items-center justify-center gap-10'>
              <div className='hidden shrink sm:flex'>
                <Introduction />
              </div>
              <div
                id='layout-Root'
                className='relative flex h-full max-h-[950px] min-h-[600px] w-full min-w-[350px] max-w-[450px] shrink-0 flex-col bg-background text-white shadow-xl'
              >
                {children}
              </div>
            </div>
            <ToastContainer className='bottom-[103px] flex flex-col items-center justify-center' />
          </MSWComponent>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
