export const getUserStatus = async (cookieHeader?: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/status`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(cookieHeader && { Cookie: cookieHeader }),
      },
    },
  );

  const data = await response.json();

  return data;
};
