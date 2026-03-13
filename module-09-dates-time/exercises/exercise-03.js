/**
 * Exercise 03 – Age Calculator
 *
 * Calculates age based on birthdate.
 */

function calculateAge(birthdate) {
  const birth = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}

// Example
console.log("Age:", calculateAge("1995-06-15"));