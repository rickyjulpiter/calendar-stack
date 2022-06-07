export const createCalendarList = (startDate = new Date()) => {
  let nameOfDays = new Array(7);
  nameOfDays[0] = 'Sunday';
  nameOfDays[1] = 'Monday';
  nameOfDays[2] = 'Tuesday';
  nameOfDays[3] = 'Wednesday';
  nameOfDays[4] = 'Thursday';
  nameOfDays[5] = 'Friday';
  nameOfDays[6] = 'Saturday';

  let nameOfMonths = [];
  nameOfMonths[0] = 'January';
  nameOfMonths[1] = 'February';
  nameOfMonths[2] = 'March';
  nameOfMonths[3] = 'April';
  nameOfMonths[4] = 'May';
  nameOfMonths[5] = 'June';
  nameOfMonths[6] = 'July';
  nameOfMonths[7] = 'August';
  nameOfMonths[8] = 'September';
  nameOfMonths[9] = 'October';
  nameOfMonths[10] = 'November';
  nameOfMonths[11] = 'December';

  let days = startDate.getDate();
  let month = startDate.getMonth() + 1;
  let year = startDate.getFullYear();
  const totalDateInMonth = new Date(year, month, 0).getDate();

  const tempCalendarList = [];
  let tempDaysList = days;

  for (let index = 0; index <= totalDateInMonth - 1; index++) {
    let arrangeDate = `${year}-${month < 10 ? `0${month}` : month}-${tempDaysList < 10 ? `0${tempDaysList}` : tempDaysList}`;
    tempCalendarList.push({
      date: arrangeDate,
      day: tempDaysList,
      dayName: nameOfDays[new Date(arrangeDate).getDay()],
      monthName: nameOfMonths[new Date(arrangeDate).getMonth()],
      year
    });
    if (tempDaysList === totalDateInMonth) {
      tempDaysList = 1;
    } else {
      tempDaysList++;
    }
  }

  return tempCalendarList;
};
