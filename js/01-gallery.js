import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// document
//   .querySelector('head')
//   .insertAdjacentHTML(
//     'beforeend',
//     `<link href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css" rel="stylesheet">`
//   );
// document.body.insertAdjacentHTML(
//   'beforeend',
//   `<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"
//   type="module"></script>`
// );
const galleryWrapper = document.querySelector('div.gallery');

function createGallary(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
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

  showImageInModal(evt);
}

function showImageInModal(evt) {
  const originalImg = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${originalImg}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', closeByEsc);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', closeByEsc);
      },
    }
  );
  instance.show();

  function closeByEsc(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}

// function closeByEsc(evt) {
//   console.log(evt.code === 'Escape');
//   if (evt.code === 'Escape') {
//     instance.close();
//   }
// }
