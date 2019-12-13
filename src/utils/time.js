function getCurMonth() {
  var now = new Date();
  var year = now.getFullYear(); // getYear()+1900=getFullYear()
  var month = now.getMonth() + 1; // 0-11表示1-12月
  var day = now.getDate();
  var dateObj = {};
  if (parseInt(month) < 10) {
    month = "0" + month;
  }
  if (parseInt(day) < 10) {
    day = "0" + day;
  }

  dateObj.now = year + '-' + month + '-' + day;
  dateObj.year = year
  dateObj.month = month
  dateObj.day = day
  return dateObj;
}

function getLastMonth(curMonth = "") {
  console.log(curMonth)
  let year = curMonth.substring(0, 4)
  let month = curMonth.substring(5, 7)
  let day = curMonth.substring(8, 10)
  let dateObj = {}
  dateObj.now = year + '-' + month + '-' + day;
  dateObj.year = year
  dateObj.month = month - 1
  dateObj.day = day
  if (parseInt(month) === 1) { // 如果是1月份，则取上一年的12月份
    dateObj.now = (parseInt(year) - 1) + '-12-' + day;
    return dateObj;
  }
  // 上月总天数
  var preSize = new Date(year, parseInt(month) - 1, 0).getDate();
  // 上月总天数 < 本月日期，比如3月的30日，在2月中没有30
  if (preSize < parseInt(day)) {
    dateObj.now = year + '-' + (parseInt(month) - 1) + '-01';
    return dateObj;
  }
  // 上月总天数 >= 本月日期
  if (parseInt(month) <= 10) {
    dateObj.now = year + '-0' + (parseInt(month) - 1) + '-' + day;
    return dateObj;
  } else {
    dateObj.now = year + '-' + (parseInt(month) - 1) + '-' + day;
    return dateObj;
  }
}

function getNextMonth(curMonth = "") {
  let year = curMonth.substring(0, 4)
  let month = curMonth.substring(5, 7)
  let day = curMonth.substring(8, 10)
  let dateObj = {}
  dateObj.now = year + '-' + (parseInt(month) + 1) + '-' + day;
  dateObj.year = year
  dateObj.month = parseInt(month) + 1
  dateObj.day = day
  if (parseInt(month) === 12) { // 如果是1月份，则取上一年的12月份
    dateObj.now = (parseInt(year) + 1) + '-01-' + day;
    return dateObj;
  }
  // 下月总天数
  var preSize = new Date(year, parseInt(month) + 1, 0).getDate();
  // 下月总天数 < 本月日期，比如3月的30日，在2月中没有30
  if (preSize < parseInt(day)) {
    dateObj.now = year + '-' + (parseInt(month) + 1) + '-01';
    return dateObj;
  }
  // 下月总天数 >= 本月日期
  if (parseInt(month) + 1 < 10) {
    dateObj.now = year + '-0' + (parseInt(month) + 1) + '-' + day;
    return dateObj;
  } else {
    dateObj.now = year + '-' + (parseInt(month) + 1) + '-' + day;
    return dateObj;
  }
}
let time = {
  getCurMonth: getCurMonth,
  getLastMonth: getLastMonth,
  getNextMonth: getNextMonth
}
module.exports = time
