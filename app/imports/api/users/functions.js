/** EXTRA FUNCTIONS  */

// Changes date in format "yyyy-mm-dd" to "monthName dd, yyyy"
export const changeDateFormat = (str) => {
  var myDate = new Date(str);
  var monthName = myDate.toLocaleString('en-us', {
    month: 'long'
  });
  var day = myDate.getUTCDate();
  var year = myDate.getFullYear();
  var res = monthName + ' ' + day + ', ' + year;
  return res;
}
