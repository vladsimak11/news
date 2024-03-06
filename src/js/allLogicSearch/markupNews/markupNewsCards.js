export const newsCardMarkup = ({
  id,
  image_url,
  section,
  abstract,
  title,
  published_date,
  url,
}) => {
  return `
    <div class="newsHomePage-card" data-id=${id}>
      <div class="card-picture">
        <img
          class="newsHomePage-image"
          src="${image_url}"
          alt="News cover"
          width="288"
          height="265"
        />
        <p class="dispNo newsHomePage-status-read">Already read</p>
        <p class="newsHomePage-search-category">${section}</p>

        <button class="btn-favorite" type="button" data-id="${id}">
          Add to favourite

        </button>
      </div>

      <div>
        <h2 class="newsHomePage-title">
          ${title}
        </h2>
        <p class="newsHomePage-text">
          ${abstract}
        </p>
      </div>

      <div class="homePage-readMore">
        <p class="newsHomePage-date">${published_date}</p>
        <a class="newsHomePage-readMore-link" target = "_blank" href="${url}">Read more</a>
      </div>
    </div>
    </div>
    `;
};
