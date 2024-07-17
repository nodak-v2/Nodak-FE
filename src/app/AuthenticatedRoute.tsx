'use client';

import { usePathname, useRouter } from 'next/navigation';
import { pathToRegexp } from 'path-to-regexp';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';

const matchers = ['/users/profile/:path'];

const redirectUrl = '/signin';

const AuthenticatedRoute = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { login: isLogin } = useGetUserStatusAPI();

  if (isLogin || pathToRegexp(redirectUrl).test(pathname)) {
    return null;
  }

  if (!isLogin && matchers.some(path => pathToRegexp(path).test(pathname))) {
    router.push('/signin');
  }

  return null;
};

export default AuthenticatedRoute;
