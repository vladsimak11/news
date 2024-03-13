import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSubscribe = document.querySelector('.footer-form');
let email = document.querySelector('input[name="footer-email"]');

const BASE_URL = 'https://news-back-5zr9.onrender.com/users/subscribe';

const arrUsers = JSON.parse(localStorage.getItem('usersEmail')) || [];;

formSubscribe.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  fetchUserCreate(email.value);

  if (!arrUsers.includes(email.value)) {
    arrUsers.push(email.value);
    localStorage.setItem('usersEmail', JSON.stringify(arrUsers));
    Notify.success('You have subscribed to the news!');
  } else {
    Notify.failure('You have subscribed to the news!');
  }

  console.log(arrUsers)
  email.value = '';
}

function fetchUserCreate(user) {
  let userEmail = {
    email: user,
  };

  return fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(userEmail),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => {
        response.json();
    })
    .catch(error => console.log(error));
}
