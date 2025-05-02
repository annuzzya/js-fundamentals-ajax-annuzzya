// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('userNameInput');
    const button = document.getElementById('getUserButton');
    const userCity = document.getElementById('userCity');
  
    button.addEventListener('click', async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
  
        const userName = input.value.trim();
        const user = users.find(u => u.name === userName);
  
        if (user) {
          userCity.textContent = user.address.city;
        } else {
          userCity.textContent = 'Користувача не знайдено';
        }
      } catch (error) {
        console.error('Помилка при отриманні користувача:', error);
        userCity.textContent = 'Сталася помилка';
      }
    });
  });  