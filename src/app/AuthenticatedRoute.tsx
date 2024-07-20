'use client';

import { PropsWithChildren } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { pathToRegexp } from 'path-to-regexp';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';

const matchers = ['/users/profile/:path'];

const redirectUrl = '/signin';

const AuthenticatedRoute = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const router = useRouter();
  const { login: isLogin } = useGetUserStatusAPI();

  if (!isLogin && matchers.some(path => pathToRegexp(path).test(pathname))) {
    router.push(redirectUrl);
    return null;
  }

  return <>{children}</>;
};

export default AuthenticatedRoute;
