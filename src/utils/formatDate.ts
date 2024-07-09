export const formatDateCustom = (
  createdAt: string,
  includeSameYear: boolean = true,
): string => {
  const createdDate = new Date(createdAt);
  const current = new Date();

  const isSameDay =
    createdDate.getFullYear() === current.getFullYear() &&
    createdDate.getMonth() === current.getMonth() &&
    createdDate.getDate() === current.getDate();

  const hours = createdDate.getHours().toString().padStart(2, '0');
  const minutes = createdDate.getMinutes().toString().padStart(2, '0');

  if (isSameDay) {
    return `${hours}:${minutes}`;
  } else {
    const year = createdDate.getFullYear();
    const month = (createdDate.getMonth() + 1).toString().padStart(2, '0');
    const day = createdDate.getDate().toString().padStart(2, '0');

    if (!includeSameYear && year === current.getFullYear()) {
      return `${month}. ${day} ${hours}:${minutes}`;
    } else {
      return `${year}. ${month}. ${day} ${hours}:${minutes}`;
    }
  }
};
