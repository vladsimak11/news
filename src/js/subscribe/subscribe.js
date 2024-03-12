const formSubscribe = document.querySelector('.footer-form');
let email = document.querySelector('input[name="footer-email"]');

const BASE_URL = 'https://news-back-5zr9.onrender.com/users/subscribe';

formSubscribe.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  fetchUser(email.value);
  console.log(email.value);
  email.value = '';
}

function fetchUser(user) {

  let userEmail = {
    email: user
  }

  return fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(userEmail),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.json())
  .catch(error => console.log(error));
}
