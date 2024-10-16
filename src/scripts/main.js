'use strict';

// write code here
const listEmployee = document.querySelectorAll('li');

function parseSalary(salaryString) {
  const cleanedString = salaryString.replace(/[^0-9.-]+/g, '');

  // Перевіряємо, чи це дійсно валідне число
  if (!isNaN(cleanedString) && cleanedString.trim() !== '') {
    return parseFloat(cleanedString);
  } else {
    return null;
  }
}

function sortList(list) {
  return [...list].sort((a, b) => {
    // Отримуємо зарплату з data-атрибутів і перетворюємо в число
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    // Сортуємо за спаданням зарплати
    return salaryB - salaryA;
  });
}

function getEmployees(list) {
  return list.map((item) => {
    // Використовуємо деструктуризацію для dataset
    const { position, salary, age } = item.dataset;
    const nameObj = item.textContent.trim(); // Отримуємо ім'я

    return {
      nameObj,
      position, // Використовуємо деструктуризоване значення
      salary: parseSalary(salary), // Конвертуємо зарплату в число
      age: parseInt(age), // Конвертуємо вік в число
    };
  });
}

function getSortedEmployees(list) {
  const resSort = sortList(list);

  return getEmployees(resSort);
}

getSortedEmployees(listEmployee);
