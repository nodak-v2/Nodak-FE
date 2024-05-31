'use client';

import { useEffect, useState } from 'react';

const initMsw = async () => {
  if (
    process.env.NEXT_RUNTIME !== 'nodejs' &&
    process.env.NEXT_PUBLIC_ENV === 'development'
  ) {
    console.log('init msw');
    const { worker } = await import('./browser');
    await worker.start({
      onUnhandledRequest: 'bypass',
    });
    worker.stop();
  }
};

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if (!isInit) {
      initMsw().then(() => setIsInit(true));
    }
  }, [isInit]);

  if (!isInit) {
    return null;
  }

  return <>{children}</>;
};
