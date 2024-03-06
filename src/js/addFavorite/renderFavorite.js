import { templateFavoriteNews } from './templateFavoriteNews';

const galleryFavouriteRef = document.querySelector('.gallery-favourite');

if (galleryFavouriteRef) {
  galleryFavouriteRef.addEventListener('click', onClickRemoveCard);
}

const favoriteList = JSON.parse(localStorage.getItem('favoriteStorage')) || [];

renderTemplateFavorite(favoriteList);

const refCards = document.querySelectorAll('.newsHomePage-card');

function onClickRemoveCard(e) {
  const idCardsFov = e.target.dataset.id;

  let localStorageGetKey = localStorage.getItem('favoriteStorage');
  let cardsLocalParse = JSON.parse(localStorageGetKey);
  let filter = [];
  cardsLocalParse.forEach(on => {
    const allid = on.id || on._id || on.slug_name;

    if (allid != idCardsFov) {
      filter.push(on);
    }
  });

  localStorage.setItem('favoriteStorage', JSON.stringify(filter));

  refCards.forEach(idCards => {
    if (idCards.dataset.id === idCardsFov) {
      idCards.remove();
    }
  });
}

export function renderTemplateFavorite(newsDateResp) {
  if (galleryFavouriteRef) {
    galleryFavouriteRef.innerHTML = templateFavoriteNews(newsDateResp);
  }
}