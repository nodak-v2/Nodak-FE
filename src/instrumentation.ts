export async function register() {
  console.log(
    '[instrumentation] server.listen()...',
    process.env.NEXT_RUNTIME,
    typeof window,
  );

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { server } = await import('@/src/mocks/node');
    server.listen({
      onUnhandledRequest: 'bypass',
    });
  }
}
