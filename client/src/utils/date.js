const formatDate = (date) => {
  const day = date.getDate();
  let month = date.getMonth();
  const year = date.getFullYear();
  if (day != undefined) {
      const formattedDay = day.toString().length == 1 ? '0' + day : day;
      month++; //January is month 0
      const formattedMonth = month.toString().length == 1 ? '0' + month : month;
      return `${formattedDay}/${formattedMonth}/${year}`;
  } else {
      return '--/--/----';
  }
};

const formatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes > 9 ? minutes : '0' + minutes}`;
};

export const formatDateFromMilliseconds = (milliseconds) => {
  const date = new Date(milliseconds);
  return formatDate(date);
};

export const fromatTimeFromMilliseconds =(milliseconds) => {
  const date = new Date(milliseconds);
  return formatTime(date);
};