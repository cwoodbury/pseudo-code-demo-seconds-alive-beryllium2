let monthOfBirth = prompt(" Enter month of birth. ");
let yearOfBirth = prompt(" Enter year of birth. ");
let currentYear =  new Date().getFullYear()
let currentMonth = new Date().getMonth() + 1



let secsInMonth = 60 * 60 * 24 * 30;
let secsInYear = secsInMonth * 12;
let secsInBirthYear = secsInMonth * (12 - monthOfBirth)
let secsInCurrentYear = secsInMonth * currentMonth
let secsBetweenYears = secsInYear * (12 - monthOfBirth)
let secsSinceBirth =  secsInBirthYear + secsInCurrentYear + secsBetweenYears 

document.write(secsSinceBirth);