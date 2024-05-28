export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { server } = await import('@/src/mocks/node');
    server.listen({
      onUnhandledRequest: 'bypass',
    });
    server.close();
  }
}
