/**
 * Exercise 04 – Days Between Dates
 *
 * Returns difference in days between two dates.
 */

function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diff = Math.abs(d2 - d1);

  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// Example
console.log(daysBetween("2026-03-01", "2026-03-14"));