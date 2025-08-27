const day = ['일', '월', '화', '수', '목', '금', '토'];

export function getFullDateToString(date) {
  if (date) {
    var formatted = date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일 ' + day[date.getDay()] + '요일 ' + date.getHours() + '시 ' + date.getMinutes() + '분 ' + date.getSeconds() + '초';
    return formatted;
  }
}
