let incomingСardsHome;

export function comeCardsHome(cardsHome) {
  incomingСardsHome = cardsHome;
}

let incomingСardsSearch;

export function addFavorite(cardsSearch) {
  incomingСardsSearch = cardsSearch;
}

let incomingСardsCategory;

export function addCategory(cardsCategory) {
  incomingСardsCategory = cardsCategory;
}

let arrayOfCardsSelectedById =
  JSON.parse(localStorage.getItem('favoriteStorage')) || [];

let arrayOfCardsSelectedByReadMoreLink =
  JSON.parse(localStorage.getItem('readMore')) || [];



const galleryHomeRef = document.querySelector('.gallery');

let arrFavoriteId = JSON.parse(localStorage.getItem('favoriteId')) || [];

window.addEventListener('load', loadRemoveBtn);

function loadRemoveBtn() {
  console.log('loadBtn')
}

if (galleryHomeRef) {
  galleryHomeRef.addEventListener('click', onClickGalleryHome);
}

// =========================HOME========================
function onClickGalleryHome(e) {
  const cardsHomeId = e.target.dataset.id;
  const cardsHomeReadLink = e.target.href;

  const btn = e.target.closest(`.btn-favorite`);

  if (incomingСardsHome) {
    incomingСardsHome.forEach(news => {
      if (news.id == cardsHomeId) {
        arrayOfCardsSelectedById.push(news);
        localStorage.setItem(
          'favoriteStorage',
          JSON.stringify(arrayOfCardsSelectedById)
        );

        arrFavoriteId.push(cardsHomeId);
        localStorage.setItem('favoriteId', JSON.stringify(arrFavoriteId));

        btn.classList.add('btn-favorite-add');
        btn.innerHTML = 'Remove from favorite';
      }

      if (news.url === cardsHomeReadLink) {
        arrayOfCardsSelectedByReadMoreLink.push(news);
        localStorage.setItem(
          'readMore',
          JSON.stringify(arrayOfCardsSelectedByReadMoreLink)
        );
      }
    });
  }

  // =========================Search========================
  if (incomingСardsSearch) {
    incomingСardsSearch.forEach(news => {
      if (news._id === cardsHomeId) {
        arrayOfCardsSelectedById.push(news);
        localStorage.setItem(
          'favoriteStorage',
          JSON.stringify(arrayOfCardsSelectedById)
        );
        btn.classList.remove('add-to-favBtn');
        btn.classList.add('remove-from-favourite');
      }
      if (news.web_url === cardsHomeReadLink) {
        arrayOfCardsSelectedByReadMoreLink.push(news);
        localStorage.setItem(
          'readMore',
          JSON.stringify(arrayOfCardsSelectedByReadMoreLink)
        );
      }
    });
  }
  if (incomingСardsCategory) {
    incomingСardsCategory.map(news => {
      if (news.slug_name === cardsHomeId) {
        arrayOfCardsSelectedById.push(news);
        localStorage.setItem(
          'favoriteStorage',
          JSON.stringify(arrayOfCardsSelectedById)
        );
        btn.classList.remove('add-to-favBtn');
        btn.classList.add('remove-from-favourite');
      }
      if (news.url === cardsHomeReadLink) {
        arrayOfCardsSelectedByReadMoreLink.push(news);
        localStorage.setItem(
          'readMore',
          JSON.stringify(arrayOfCardsSelectedByReadMoreLink)
        );
      }
    });
  }
  checkCardsLokal();
}

function checkCardsLokal(params) {
  const readStatus = document.querySelector('newsHomePage-status-read');
  const idHomeCards = incomingСardsHome.map(on => on.id);
  // console.log(idHomeCards);

  const idcardsRead = arrayOfCardsSelectedByReadMoreLink.map(one => one.id);
  // console.log(idcardsRead);
}
