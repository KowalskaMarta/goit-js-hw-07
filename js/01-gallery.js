import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList =
document.querySelector("ul.gallery");
galleryList.insertAdjacentHTML("beforeend", createGallery(galleryItems));

function createGallery(array) {
    let myGallery = " ";
    array.forEach(element => {
        myGallery += `<div class= "gallery__item">
        <a class="gallery__link" href="${element.orginal}">
        <img src="${element.preview}"
        data-source="${element.orginal}" alt="${element.description}" class="gallery__image" /></a></div>`; 
    });
}
return myGallery;

console.log(galleryItems);
