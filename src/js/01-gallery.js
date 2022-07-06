// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
const transformResult = galleryItemTransform(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', transformResult);

let lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function galleryItemTransform(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
