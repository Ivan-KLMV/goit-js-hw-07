import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery');

function createGallary(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>`
    )
    .join('');
}

galleryWrapper.insertAdjacentHTML('afterbegin', createGallary(galleryItems));

galleryWrapper.addEventListener('click', onImageClick);

function onImageClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  evt.preventDefault();

  console.log(evt.target);
  new SimpleLightbox('.gallery a');
}

// function showImageInModal() {
//   new SimpleLightbox('.gallery a');
// }
