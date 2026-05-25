const calculateAge = function (birthDate) {
  const today = new Date('2026-05-18');

  if (typeof birthDate !== 'string') {
    return 'Error: Invalid date format';
  }

  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!datePattern.test(birthDate)) {
    return 'Error: Invalid date format';
  }

  const birthday = new Date(birthDate);

  if (isNaN(birthday.getTime())) {
    return 'Error: Invalid date format';
  }

  let age = today.getFullYear() - birthday.getFullYear();

  const birthdayAlreadyHappened =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() >= birthday.getDate());

  if (!birthdayAlreadyHappened) {
    age--;
  }

  if (age < 0) {
    return 'Error: Birth date cannot be in the future.';
  }

  if (age > 125) {
    return 'Are you sure you are more than 125 years old';
  }

  return `You are ${age} years old`;
};

console.log(calculateAge('2000-07-01'));
// You are 25 years old
console.log(calculateAge('1988-05-18'));
// You are 38 years old
console.log(calculateAge('2190-01-01'));
// Error: Birth date cannot be in the future
console.log(calculateAge('1800-01-01'));
// Are you sure you are more than 125 years old?
console.log(calculateAge('invalid-date'));
// Error: Invalid date format

// Note: These calculations were done on May 18, 2026.
