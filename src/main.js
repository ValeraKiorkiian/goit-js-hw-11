// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import functions
import { getImages } from './js/pixabay-api';
import { renderGallery, cleanGallery } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const userAnswer = event.currentTarget.elements.searchText.value.trim();
  if (!userAnswer) {
    return;
  }
  cleanGallery();
  showLoader();
  getImages(userAnswer)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again',
        });
        return;
      }
      renderGallery(hits);
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again',
      });
    })
    .finally(() => {
      form.reset();
      hideLoader();
    });
}

function showLoader() {
  loader.style.display = 'flex';
}
function hideLoader() {
  loader.style.display = 'none';
}
