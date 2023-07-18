const addModal = document.getElementById("add-modal");
const addMovie = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovie = addModal.querySelector(".btn--passive");
const confirmAddMovie = addModal.querySelector(".btn--success");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleModal = () => {
  addModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelMovie = () => {
  toggleModal();
};

const addMovieHandler = () => {
    
};

const backdropHandler = () => {
  toggleModal();
};

addMovie.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleBackdrop);
cancelAddMovie.addEventListener("click", cancelMovie);
confirmAddMovie.addEventListener("click", addMovieHandler);
