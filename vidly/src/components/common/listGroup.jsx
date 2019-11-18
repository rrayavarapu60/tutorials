import React from "react";
//import { genres } from "../../services/fakeGenreService";

const ListGroup = props => {
  const { Genres: genres, onGenreChange, selectedGenre } = props;
  console.log("in list group:", genres, selectedGenre);

  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          key={genre.name}
          className={
            genre.name === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onGenreChange(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
