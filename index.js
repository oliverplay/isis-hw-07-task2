// Import the galleryItems array from "./gallery-items.js"
import { galleryItems } from "./gallery-items.js";

// Get a reference to the gallery element
const galleryRef = document.querySelector(".gallery");

// Generate the gallery markup using the galleryItems array
const galleryMarkup = createImagesMarkup(galleryItems);

// Insert the gallery markup into the gallery element
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

// Add a click event listener to the gallery element
galleryRef.addEventListener("click", onImgClick);

// Function to create the gallery markup
function createImagesMarkup(img) {
  return img
    .map(
      (item) => `
      <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    `
    )
    .join("");
}

// Function to handle image click event
function onImgClick(event) {
  // Prevent the default behavior of the click event
  event.preventDefault();

  // Check if the clicked element has the "gallery__image" class
  const isImageEl = event.target.classList.contains("gallery__image");
  if (!isImageEl) {
    // If not, return and do nothing
    return;
  }

  // Create a new instance of SimpleLightbox with the specified selector and options
  const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
