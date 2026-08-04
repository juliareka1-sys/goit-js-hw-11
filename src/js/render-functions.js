import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector(".gallery");
const lightboxInstance = new SimpleLightbox(".gallery a");

export function clearGallery() {

    galleryContainer.innerHTML = ""; 
};

const loader = document.querySelector(".loader") 

export function showLoader() {
    loader.classList.remove("is-hidden")
    
};

export function hideLoader() {
    loader.classList.add("is-hidden");
    
}; 

export function createGallery(images) {
    const markup = images.map(image =>
        `<li class="gallery-item">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}">
            </a>
            <p> Likes ${image.likes} </p>
            <p>Views ${image.views}</p> 
            <p> Comments ${image.comments}</p>
            <p> Downloads ${image.downloads}</p>
        </li>`
    ).join("");

    galleryContainer.insertAdjacentHTML("beforeend", markup);
    lightboxInstance.refresh();
  
};
    
    
