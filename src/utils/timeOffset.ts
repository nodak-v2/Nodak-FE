const timeOffset = (standardTime: string | Date) => {
  if (standardTime instanceof Date) {
    standardTime = standardTime.toString();
  }

  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 30;
  const YEAR = MONTH * 12;

  const createTime = new Date(standardTime);
  const nowTime = new Date();

  const compareTime = Math.floor(
    (nowTime.getTime() - createTime.getTime()) / 1000,
  );
  if (compareTime < MINUTE) {
    return compareTime === 0 ? '방금 전' : `${compareTime}초 전`;
  } else if (compareTime < HOUR) {
    return `${Math.floor(compareTime / MINUTE)}분 전`;
  } else if (compareTime < DAY) {
    return `${Math.floor(compareTime / HOUR)}시간 전`;
  } else if (compareTime < MONTH) {
    return `${Math.floor(compareTime / DAY)}일 전`;
  } else if (compareTime < YEAR) {
    return `${Math.floor(compareTime / MONTH)}개월 전`;
  } else {
    return `${Math.floor(compareTime / YEAR)}년 전`;
  }
};

export default timeOffset;
