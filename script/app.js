const addModal = document.getElementById("add-modal");
const addMovie = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovie = addModal.querySelector(".btn--passive");
const confirmAddMovie = addModal.querySelector(".btn--success");
const inputElements = addModal.querySelectorAll("input");

const movies = [];

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
  const titleValue = document.getElementById("title").value;
  const imageValue = document.getElementById("image-url").value;
  const ratingValue = document.getElementById("rating").value;

  if (
    titleValue.trim() === "" ||
    imageValue.trim() === "" ||
    ratingValue.trim() === ""
  ) {
    alert("Input values cannot contain spaces in the beginning or end.");
    return;
  } else if (+ratingValue < 1 || +ratingValue > 5) {
    alert("Rating must be contained in the range of 1-5");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageValue,
    rating: ratingValue,
  };
};

const backdropHandler = () => {
  toggleModal();
};

addMovie.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleBackdrop);
cancelAddMovie.addEventListener("click", cancelMovie);
confirmAddMovie.addEventListener("click", addMovieHandler);
