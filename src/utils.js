import dayjs from 'dayjs';

const formatDate = (dueDate, date = 'DD/MM/YY HH:mm') => dayjs(dueDate).format(date);

const generateDateFrom = () => {
  const isDate = getRandomInteger(-365 * 24 * 60, 365 * 24 * 60);

  return dayjs('2021-01-18').add(isDate, 'minute').toDate();
};

const getDifference = (from, to) => {
  const difference = Math.abs(dayjs(from).diff(dayjs(to), 'minute'));
  const hours = Math.floor(difference / 60);
  const minutes = difference % 60;

  return `${hours}H ${minutes}M`;
};

const generateDateTo = (dateFrom) => {
  const isDate = getRandomInteger(30, 5 * 60);

  return dayjs(dateFrom).add(isDate, 'minute').toDate();
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export {getRandomInteger, formatDate, generateDateFrom, generateDateTo, getDifference};