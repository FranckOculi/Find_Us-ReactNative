import moment from 'moment';

export const isEmpty = (value) => {
  if (
    value === undefined ||
    (typeof value === 'object' && value === null) ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === null) ||
    (typeof value === 'string' && value.trim().length === 0)
  ) {
    return true;
  } else {
    return false;
  }
};

export const dateParser = (num) => {
  const date = moment(num).format('D MMMM YYYY');

  return date;
};

export const compareDate = (num) => {
  const today = dateParser(new Date());
  const date = dateParser(num);
  if (date > today) return 1;
  if (date < today) return -1;
  if (date === today) return 0;
};

export const compareTwoDates = (num1, num2) => {
  const date1 = dateParser(num1);
  const date2 = dateParser(num2);
  return date1 - date2;
};
