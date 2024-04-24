export const initMsw = () => {
  if (process.env.NODE_ENV === 'development') {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      (async () => {
        const { server } = await import('./node');
        server.listen({
          onUnhandledRequest: 'bypass',
        });
      })();
    } else {
      (async () => {
        const { worker } = await import('./browser');
        worker.start({
          onUnhandledRequest: 'bypass',
        });
      })();
    }
  }
};
