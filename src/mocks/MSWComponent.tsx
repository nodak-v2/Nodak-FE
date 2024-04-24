'use client';

import { useEffect, useState } from 'react';

import { initMsw } from '@/src/mocks/initMsw';

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [isInit, isSetInit] = useState(false);

  useEffect(() => {
    if (!isInit) {
      initMsw().then(() => isSetInit(true));
    }
  }, [isInit]);

  if (!isInit) {
    return null;
  }

  return <>{children}</>;
};
