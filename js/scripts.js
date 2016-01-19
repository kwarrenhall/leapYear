var leapYear = function(year) {
  if (year === "september") {
    return false;
  } else if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
  return false;
  }
};
