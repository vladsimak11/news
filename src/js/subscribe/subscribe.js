import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSubscribe = document.querySelector('.footer-form');
let email = document.querySelector('input[name="footer-email"]');

const BASE_URL = 'https://news-back-5zr9.onrender.com/users/subscribe';

formSubscribe.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  // fetchUserCreate(email.value);
  const response = await fetchGetEmails();
  console.log(response.emails);
  // Notify.success('You have subscribed to the news!');
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
    .then(response => {
      return response.emails;
    })
    .catch(error => console.log(error));
}
