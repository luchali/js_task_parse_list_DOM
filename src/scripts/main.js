'use strict';

// write code here
const listEmployee = document.body.querySelectorAll('li');

function parseSalary(salaryString) {
  return parseFloat(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  return list.sort((a, b) => {
    // Отримуємо зарплату з data-атрибутів і перетворюємо в число
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    // Сортуємо за спаданням зарплати
    return salaryB - salaryA;
  });
}

function getEmployees(list) {
  return list.map((item) => {
    // Створюємо об'єкт для кожного елементу списку
    return {
      name: item.textContent.trim(), // Отримуємо ім'я
      position: item.dataset.position, // Отримуємо позицію
      salary: parseSalary(item.dataset.salary), // Отримуємо зп і конвертуємо
      age: parseInt(item.dataset.age), // Отримуємо вік і конвертуємо в число
    };
  });
}

sortList(listEmployee);
getEmployees(listEmployee);
