function dateProgramming(dateToCheck) {
  const conversion = 1000 * 60 * 60 * 24;
  const dateNow = new Date(Date.now());
  const date_input = new Date(dateToCheck);

  const diference = date_input.getTime() - dateNow.getTime();
  const dayDifer = Math.round(diference / conversion);
  const compareDays = dayDifer > 2;

  const interval1 = 7 < date_input.getHours();
  const interval2 = 18 > date_input.getHours();

  const total = { interval1, interval2, compareDays };

  if ((total.interval2 && total.compareDays && total.interval1) === true) {
    return total;
  }
  if (total !== true) {
    console.error.json({ err: 'Your hour date is out of range doctors work' });
  }
}

module.exports = dateProgramming;
