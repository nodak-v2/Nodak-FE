'use client';

const initMsw = async () => {
  if (process.env.NEXT_RUNTIME !== 'nodejs') {
    const { worker } = await import('./browser');
    await worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
};

export const MSWComponent = () => {
  initMsw();

  return null;
};
