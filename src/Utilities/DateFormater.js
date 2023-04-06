/* eslint-disable consistent-return */
export function FormattedDate(params) {
  if (params) {
    const dateString = params;
    const dateObj = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(dateObj);
    return formattedDate;
  }
}

export function CalculatedAge(params) {
  return '';
  // if (params) {
  //     const birthdateString = params;
  //     const birthdateObj = new Date(birthdateString);
  //     const ageInMilliseconds = Date.now() - birthdateObj.getTime();
  //     // There are approximately 31556952000 milliseconds in a year
  //     const ageInYears = Math.floor(ageInMilliseconds / 31556952000);

  //     return ageInYears;
  // }
}

export function getDuration(startDateStr, endDateStr) {
  if (startDateStr) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const yearDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthDiff = endDate.getMonth() - startDate.getMonth();
    const dayDiff = endDate.getDate() - startDate.getDate();
    const totalMonthDiff = yearDiff * 12 + monthDiff;
    const years = Math.floor(totalMonthDiff / 12);
    const months = totalMonthDiff % 12;
    const yearStr = years > 0 ? `${years} Year${years > 1 ? 's' : ''}` : '';
    const monthStr = months > 0 ? `${months} Month${months > 1 ? 's' : ''}` : '';
    const dayStr = dayDiff > 0 ? `${dayDiff} Day${dayDiff > 1 ? 's' : ''}` : '';
    const durationStr = [monthStr, dayStr].filter(Boolean).join(' ');
    // const durationYearAndMonth = ;
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const startMonth = startDate.toLocaleString('default', { month: 'short' });
    const endMonth = endDate.toLocaleString('default', { month: 'short' });
    const yearStr2 = yearDiff === 0 ? startYear : `${startYear} - ${endYear - 1}`;
    const monthStr2 =
      yearDiff === 0
        ? `${startMonth} - ${endMonth}`
        : `${startMonth} ${startYear} - ${endMonth} ${endYear - 1}`;
    const yearDuration = ` ${startMonth} ${startYear} - ${endMonth} ${endYear}`;
    const dateRangeStr = `${monthStr2}  ${yearStr2}`;
    return ` ${durationStr}  ${'  ●   '}      ${yearDuration}`;
  }
}

export const getEducationDuration = (startingDate, endingDate) => {
  const startingDateConvert = new Date(`${startingDate}`);
  const endingDateConvert = new Date(`${endingDate}`);
  const startDate = startingDateConvert.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
  const endDate = endingDateConvert.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
  const dateFormate = `${startDate} - ${endDate}`;
  return dateFormate;
};
