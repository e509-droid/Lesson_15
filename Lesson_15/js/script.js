function determineGrade(points) {
  let grade;
  if (points >= 90) {
    grade = 'A';
  } else if (points >= 80) {
    grade = 'B';
  } else if (points >= 70) {
    grade = 'C';
  } else if (points >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  return grade;
}

const points = Number(prompt("Введите ваши баллы:"));

if (Number.isInteger(points) && points >= 0) {
  const result = determineGrade(points);
  console.log(`Вы получили оценку: ${result}`);
} else {
  console.log("Ошибка: введите корректное положительное число.");
}
