// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// import functions
import { responseData } from './js/pixabay-api';
import { renderGallery, cleanGallery } from './js/render-functions';

const form = document.querySelector(`.form`);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionType: 'attr',

  captionPosition: 'bottom',
});

gallery.on('show.simplelightbox', function () {});

gallery.on('error.simplelightbox', function (e) {
  console.log(e);
});

form.addEventListener(`submit`, toSearchImg);

function toSearchImg(event) {
  event.preventDefault();
  const userInp = event.currentTarget.elements.searchText.value.trim();
  if (!userInp) {
    return;
  }
  cleanGallery();
  form.reset();
  responseData(userInp)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again',
        });
        return;
      }
      console.log(data.hits);
      renderGallery(data.hits);
      gallery.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again',
      });
    });
}
