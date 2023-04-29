import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');


const addImg = galleryItems.map(item =>

    `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>`
).join("")

galleryRef.insertAdjacentHTML("afterbegin", addImg);

galleryRef.addEventListener('click', (evn) => {
  evn.preventDefault();
var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

})