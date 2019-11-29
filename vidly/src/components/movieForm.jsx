import React, { Component } from "react";

const MovieForm = ({ match, history }) => {
  console.log("in movie form");
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>;
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
