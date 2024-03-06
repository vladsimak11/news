import { templateFavoriteNews } from './templateFavoriteNews';

const galleryFavouriteRef = document.querySelector('.gallery-favourite');

if (galleryFavouriteRef) {
  galleryFavouriteRef.addEventListener('click', onClickRemoveCard);
}

const favoriteList = JSON.parse(localStorage.getItem('favoriteStorage')) || [];
const arrFavoriteId = JSON.parse(localStorage.getItem('favoriteId')) || [];

renderTemplateFavorite(favoriteList);

const refCards = document.querySelectorAll('.newsHomePage-card');

function onClickRemoveCard(e) {
  const idCardFavorite = e.target.dataset.id;

  let favoriteDelete = [];
  favoriteList.forEach(item => {
    const allId = item.id;

    if (allId != idCardFavorite) {
      favoriteDelete.push(item);
    }
  });

  localStorage.setItem('favoriteStorage', JSON.stringify(favoriteDelete));

  let favoriteId = [];

  arrFavoriteId.filter(id => {
    if (id != idCardFavorite) {
      favoriteId.push(id);
    }
  });

  localStorage.setItem('favoriteId', JSON.stringify(favoriteId));

  refCards.forEach(idCard => {
    if (idCard.dataset.id === idCardFavorite) {
      idCard.remove();
    }
  });
}

export function renderTemplateFavorite(newsDateResp) {
  if (galleryFavouriteRef) {
    galleryFavouriteRef.innerHTML = templateFavoriteNews(newsDateResp);
  }
}
