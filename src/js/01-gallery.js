// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const simplelightbox = require('simplelightbox');
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const instance = basicLightbox.create(`
    <div class="modal">
        <img src="" alt="Large image"/>
    </div>
`);

const galleryMark = galleryItems
  .map(
    galleryItem =>
      `<div class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}" /></a></div>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', galleryMark);
console.log(galleryItems);
