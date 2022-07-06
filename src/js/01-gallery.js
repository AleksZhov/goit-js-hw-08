// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import galleryItemTransform from './galleryItemsTransform';

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
const transformResult = galleryItemTransform(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', transformResult);

let lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

galleryItemTransform(galleryItems);
