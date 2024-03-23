import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSubscribe = document.querySelector('.footer-form');
let email = document.querySelector('input[name="footer-email"]');

const BASE_URL = 'https://news-back-5zr9.onrender.com/users/subscribe';

formSubscribe.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let { value } = email;

  fetchGetEmails().then(({ emails }) => {
    console.log(emails);
    let userEmail = emails.find(item => item.email == value) || ' ';
    if (userEmail.email) {
      Notify.failure(`You are already subscribed to news. Your email: ${value}`);
    } else {
      fetchUserCreate(value);
      Notify.success(`You are subscribed to the news. Your email: ${value}`);
    }
  });

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

function fetchGetEmails() {
  return fetch(BASE_URL)
    .then(response => response.json())
    .catch(error => console.log(error));
}
