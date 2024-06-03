export const getUserStatus = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/status`,
  );

  const data = await response.json();
  console.log(data.body);
  return data;
};
