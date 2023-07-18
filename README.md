# Movie Collection App

This is a simple web application for managing a collection of movies. Users can add new movies, view existing movies, and delete movies from the collection.

## Features

- Add a new movie: Users can add a new movie to the collection by providing the title, image URL, and rating (between 1 and 5 stars) of the movie.
- View movies: The application displays a list of movies in the collection, showing the movie title, image, and rating.
- Delete movies: Users can delete a movie from the collection by clicking on it and confirming the deletion.

## Getting Started

To run the application, follow these steps:

1. Clone the repository: `git clone https://github.com/xnm-sdksdk/Favorite_Movies.git`
2. Open the project directory: `cd Favorite_Movies`
3. Open the `index.html` file in a web browser.

## Usage

- Click on the "Add Movie" button in the header to open the add movie modal.
- Enter the movie details (title, image URL, and rating) and click "Add Movie" to add it to the collection.
- Click on a movie in the list to open the delete movie modal.
- Confirm the deletion to remove the movie from the collection.

## Technologies Used

- HTML
- CSS
- JavaScript

## Code Structure

The code is structured into several JavaScript functions to handle different functionalities of the application:

- `toggleBackdrop()`: Toggles the visibility of the backdrop element.
- `updateUI()`: Updates the user interface based on the current state of the movie collection.
- `closeMovieDeletionModal()`: Closes the delete movie modal and hides the backdrop.
- `deleteMovieHandler(movieId)`: Handles the deletion of a movie from the collection.
- `startDeleteMovieHandler(movieId)`: Displays the delete movie modal and confirms the deletion.
- `renderNewMovieElement(id, title, imageUrl, rating)`: Renders a new movie element in the movie list.
- `closeMovie()`: Closes the add movie modal.
- `showMovie()`: Displays the add movie modal and shows the backdrop.
- `clearInputs()`: Clears the input fields in the add movie modal.
- `cancelMovieHandler()`: Cancels the addition of a new movie and closes the add movie modal.
- `addMovieHandler()`: Handles the addition of a new movie to the collection.
- `backdropHandler()`: Handles clicks on the backdrop element.

## Contributions

Contributions to the movie collection app are welcome. If you find a bug or have an idea for an improvement, feel free to open an issue or submit a pull request.

## Contact

If you have any questions or suggestions, feel free to reach out.
