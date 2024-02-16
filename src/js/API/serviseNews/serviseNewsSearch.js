import axios from 'axios';

const API_KEY = '13J2OJQdfSen9tQqVIHpzfTVNgWWH6dm';

const formatDate = someDate => +someDate.split('/').reverse().join(''); 

let dateNumber; 

function onSelectedDate(e) {
  dateNumber = formatDate(e.target.value);
}

const begin = dateNumber || 20211231;
const end = dateNumber || 20230228;

export default class NewsApiServis {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchNewsApi() {
    const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`;
    const options = {
      params: {
        page: this.page,
        q: this.searchQuery,
        begin_date: begin,
        end_date: end,

        'api-key': API_KEY,
      },
    };

    const response = await axios.get(BASE_URL, options);
    const gatherData = await response.data;

    return gatherData;
  }

  incrementPage() {
    this.page += 1;
  }

  UsePage(go) {
    this.page = go;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
