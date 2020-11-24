function DateTime() {
  temp_date = new Date();
  day = temp_date.getDate();
  month = temp_date.getMonth() + 1;
  year = temp_date.getYear();
  if (day < 10) {
  day = "0" + day;
  }
  if (month <10) {
  month = "0" + month;
  }
  document.getElementById('footer').innerHTML = day + "." + month + "." + year;
}
