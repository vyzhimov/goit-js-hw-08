// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imageList = document.querySelector('.gallery');

const itemsMarkup = galleryItems.reduce(
  (acc, { original, preview, description }) => {
    return (acc += `<a class='gallery__item' href="${original}">
                    <img 
                      class='gallery__image' 
                      src="${preview}" 
                      alt="${description}"">
                    </img></a>`);
  },
  ''
);

imageList.insertAdjacentHTML('afterbegin', itemsMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {});
