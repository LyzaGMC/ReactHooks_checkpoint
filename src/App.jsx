// src/App.jsx
import React, { useState } from "react";
import MovieList from "./assets/components/MovieList";
import Filter from "./assets/components/Filter";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterRating, setFilterRating] = useState(null);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const posterURL = e.target.posterURL.value;
    const rating = parseFloat(e.target.rating.value);

    const newMovie = { title, description, posterURL, rating };
    addMovie(newMovie);

    // Reset the form
    e.target.reset();
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchesRating = filterRating ? movie.rating >= filterRating : true;
    return matchesTitle && matchesRating;
  });

  return (
    <div className="App">
      <h1>Mes Films Préférés</h1>
      <form onSubmit={handleAddMovie}>
        <input type="text" name="title" placeholder="Titre" required />
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="posterURL"
          placeholder="URL du Poster"
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Note"
          min="0"
          max="10"
          step="0.1"
          required
        />
        <button type="submit">Ajouter un Film</button>
      </form>

      <Filter
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterRating={setFilterRating}
      />

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
