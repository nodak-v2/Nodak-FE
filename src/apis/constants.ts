const isDevMode = process.env.NEXT_PUBLIC_ENV === 'development';

const BASE_URL = isDevMode
  ? 'http://localhost:8080'
  : process.env.NEXT_PUBLIC_URL;

const TEST_TOKEN = isDevMode ? '' : process.env.NEXT_PUBLIC_TEST_TOKEN;

export { BASE_URL, TEST_TOKEN };
