import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { firmatDate } from './templateMarkupNews';
import NewsApiServis from './serviseNewsSearch';

import { templateMarkupNews } from './templateMarkupNews';
import InitPagination from '../../pagination/pagination';

import {addFavorite} from '../../addFavorite/addFavorite';

import newDefaultMarkup from '../../defaultPage/defaultPageHome';

const galleryRef = document.querySelector('.gallery');
const galleryPageRef = document.querySelector('.gallery-page');
const searchFormRef = document.querySelector('#search-form');
let currentPage;

searchFormRef.addEventListener('submit', onSearchForm);

const newsApiServis = new NewsApiServis();

export default function onSearchForm(e) {
  e.preventDefault();
  let { value } = e.target.searchQuery;

  value = value.trim();
  if (!value) {
    Notify.warning('The search field should not be empty!');
    return;
  }

  value = value.trim();
  clearGalleryInterface();
  newsApiServis.query = value;

  requestToServer(newsApiServis.query);
}

const formatDate = someDate => +someDate.split('/').join('');

if (galleryPageRef) {
  const inputDate = document.querySelector('.calendar-input');

  inputDate.addEventListener('blur', onSelectedDate);
}

let isSelected = false;
let dateNumber;

function onSelectedDate(e) {
  isSelected = true;
  dateNumber = formatDate(e.target.value);
}

function filterResponce(dataToFilter, dateNumber) {
  const filterResult = dataToFilter.filter(item => {
    const itemDate = firmatDate(item.pub_date);
    const correctDate = formatDate(itemDate);
    return correctDate === dateNumber;
  });

  return filterResult;
}

async function requestToServer(valueQuery) {
  try {
    const data = await newsApiServis.fetchNewsApi();
    const newsDateResponse = await data.response.docs;
    let totalResult = newsDateResponse;

    if (isSelected) {

      totalResult = filterResponce(newsDateResponse, dateNumber);
      renderTemplate(totalResult);
    }
    if (totalResult.length <= 0) {
      newDefaultMarkup();
      Notify.info(
        'Sorry, there are no news matching your search query. Please try again.'
      );
      document.getElementById('pagination-container').style.display = 'none';
      return;
    }

    renderTemplate(totalResult);

    InitPagination.init(valueQuery, (currentPage = 1));

    document.getElementById('pagination-container').style.display = 'flex';

    addFavorite(totalResult);
  } catch (error) {
    console.error(error);
  }
}

searchFormRef.addEventListener('submit', onSearchForm);

function renderTemplate(e) {
  galleryRef.innerHTML = templateMarkupNews(e);
}

function clearGalleryInterface() {
  galleryRef.innerHTML = '';
}

Notify.init({
  width: '300px',

  position: 'center-top',
  distance: '80px',

  warning: {
    background: 'rgba(68,64,247,0.7)',
    textColor: '#FFFFFF',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
  info: {
    background: 'rgba(68,64,247,0.7)',
    textColor: '#FFFFFF',
    childClassName: 'notiflix-notify-info',
    notiflixIconColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-info-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});
