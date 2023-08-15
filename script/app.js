const addMovieModal = document.getElementById("add-modal");
const addMovie = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovie = addMovieModal.querySelector(".btn--passive");
const confirmAddMovie = addMovieModal.querySelector(".btn--success");
const inputElements = addMovieModal.querySelectorAll("input");
const entryText = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");
const listRoot = document.getElementById("movie-list");

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const updateUI = () => {
  entryText.style.display = movies.length === 0 ? "block" : "none";
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  const index = movies.findIndex((movie) => movie.id === movieId);
  if (index === -1) {
    return;
  }
  movies.splice(index, 1);
  listRoot.children[index].remove();
  closeMovieDeletionModal();
  updateUI();
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletion = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletion = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletion.parentElement.replaceChild(
    confirmDeletion.cloneNode(true),
    confirmDeletion
  );

  confirmDeletion = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletion.removeEventListener("click", closeMovieDeletionModal);
  cancelDeletion.addEventListener("click", closeMovieDeletionModal);

  confirmDeletion.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderMovie = (id, title, imageUrl, rating) => {
  const newLi = document.createElement("li");
  newLi.className = "movie-element";
  newLi.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  newLi.addEventListener("click", startDeleteMovieHandler.bind(null, id));
  listRoot.append(newLi);
  updateUI();
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const clearInputs = () => {
  for (const input of inputElements) {
    input.value = "";
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearInputs();
};

const addMovieHandler = () => {
  const titleValue = document.getElementById("title").value.trim();
  const imageValue = document.getElementById("image-url").value.trim();
  const ratingValue = document.getElementById("rating").value;

  if (!titleValue || !imageValue || +ratingValue < 1 || +ratingValue > 5) {
    alert("Provide valid inputs.");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearInputs();
  renderMovie(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  //updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearInputs();
};

addMovie.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovie.addEventListener("click", cancelAddMovieHandler);
confirmAddMovie.addEventListener("click", addMovieHandler);
