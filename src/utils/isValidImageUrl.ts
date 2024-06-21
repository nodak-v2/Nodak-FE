export const isValidImageUrl = (url: string | null): url is string => {
  if (!url) return false;
  if (url.startsWith('data:')) return true;
  if (url.startsWith('http://') || url.startsWith('https://')) return true;

  return false;
};
