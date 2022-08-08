import { DateTime } from './Luxon.js';

const getDate = () => {
  const date = DateTime.now();

  const showDate = document.querySelector('.date');

  showDate.textContent = `${date.toLocaleString(DateTime.DATETIME_MED)}`;
};

export default getDate;
