import React from "react";

const ListGroup = ({ Genres: genres, onGenreChange, selectedGenre }) => {
  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          key={genre.name}
          className={
            genre.name === selectedGenre.name
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onGenreChange(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
