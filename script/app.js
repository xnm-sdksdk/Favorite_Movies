const addModal = document.getElementById("add-modal");
const addMovie = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovie = addModal.querySelector(".btn--passive");
const confirmAddMovie = addModal.querySelector(".btn--success");
const inputElements = addModal.querySelectorAll("input");
const entryText = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};

const deleteMovie = (movieId) => {
  let index = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    index++;
  }
  movies.splice(index, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[index].remove();
};

const renderMovie = (id, title, imageUrl, rating) => {
  const newLi = document.createElement("li");
  newLi.className = "movie-element";
  newLi.innerHTML = `
  <div class=""<movie-element__image>
    <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  newLi.addEventListener("click", deleteMovie.bind(null));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newLi);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleModal = () => {
  addModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearInputs = () => {
  for (const input of inputElements) {
    input.value = "";
  }
};

const cancelMovieHandler = () => {
  toggleModal();
  clearInputs();
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
    id: Math.random().toString(),
    title: titleValue,
    image: imageValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleModal();
  clearInputs();
  renderMovie(newMovie.id, newMovie.title, newMovie.imageUrl, newMovie.rating);
  updateUI();
};

const backdropHandler = () => {
  toggleModal();
};

addMovie.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleBackdrop);
cancelAddMovie.addEventListener("click", cancelMovieHandler);
confirmAddMovie.addEventListener("click", addMovieHandler);
