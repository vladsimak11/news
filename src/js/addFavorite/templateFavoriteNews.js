import dateFormat from 'dateformat';

export function templateFavoriteNews(newsDateResp) {
  return newsDateResp
    .map(oneNewsItem => {
      const {
        _id,
        news_desk,
        headline,
        lead_paragraph,
        pub_date,
        web_url,
        id,
        image_url,
        section,
        abstract,
        title,
        published_date,
        url,
        multimedia,
        slug_name,
        thumbnail_standard,
      } = oneNewsItem;
      const idAll = _id || id || slug_name;

      const fooImg =
        image_url || thumbnail_standard || checkUrlImg(oneNewsItem);

      return `
    <div class="newsHomePage-card" data-id=${idAll}>
    <div class="card-picture">
        <img
          class="newsHomePage-image"
          src="${fooImg}"
          alt="news cover"
          width="288"
          height="265"
        />
    
        <p class="newsHomePage-search-category">${news_desk || section}</p>

        <button class="btn-favorite btn-favorite-remove" type="button" data-id=${idAll} >
          Remove from favourite
        </button>
      </div>
      
      <div>
        <h2 class="newsHomePage-title">
          ${title || headline.main}
        </h2>
        <p class="newsHomePage-text">
          ${formatingDerscription(abstract || lead_paragraph)}
        </p>
      </div>
      <div class="homePage-readMore">
        <p class="newsHomePage-date">${
          published_date || firmatDate(pub_date)
        }</p>
        <a class="newsHomePage-readMore-link" target = "_blank" href="${
          url || web_url
        }">Read more</a>
      </div>
    </div>
    </div>`;
    })
    .join('');
}

function checkUrlImg(item) {
  // const urlImage = item;
  const foo = item.multimedia[0].url;

  if (!foo.length) {
    return 'https://placehold.co/400x400?text=NO+IMAGE';
  }

  return `https://static01.nyt.com/${foo}`;
}

function formatingDerscription(description) {
  let newFormat = description;
  if (newFormat.length > 80) {
    newFormat = description.slice(0, 80) + '...';
  }
  return newFormat;
}

function firmatDate(date) {
  const now = new Date(date);
  return dateFormat(now, 'dd/mm/yyyy');
}
