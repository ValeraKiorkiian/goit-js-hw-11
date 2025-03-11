const list = document.querySelector(`.gallery`);

export function renderGallery(images) {
  const markup = images
    .map(
      image => `
    <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img src="${image.previewURL}" alt="${image.tags}" width="" height="" />
        </a>
        <div class="description">
          <p class="gallet-item-text">Likes</p>
          <span>${image.likes}</span>
        </div>
        <div class="description">
          <p class="gallet-item-text">Views</p>
          <span>${image.views}</span>
        </div>
        <div class="description">
          <p class="gallet-item-text">Comments</p>
          <span>${image.comments}</span>
        </div>
        <div class="description">
          <p class="gallet-item-text">Downloads</p>
          <span>${image.downloads}</span>
        </div>
      </li>`
    )
    .join(``);
  list.innerHTML = markup;
}

export function cleanGallery() {
  list.innerHTML = ``;
}
