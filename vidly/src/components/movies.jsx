import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = { movies: getMovies() };

  title = this.state.movies.map(c => c.title);

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    console.log(movies);
    this.setState({ movies: movies });
  };

  listitems = this.state.movies.map(c => (
    <div className="row mb-3">
      <div className="col-md-2 themed-grid-col">{c.title}</div>
      <div className="col-md-2 themed-grid-col">{c.genre.name}</div>
      <div className="col-md-2 themed-grid-col">{c.numberInStock}</div>
      <div className="col-md-2 themed-grid-col">{c.dailyRentalRate}</div>

      <div className="col-md-2 themed-grid-col">
        <button
          type="submit"
          className="btn btn-sm btn-danger"
          onClick={() => this.handleDelete(c)}
        >
          Delete
        </button>
      </div>
    </div>
  ));

  render() {
    // console.log(this.state);

    return (
      <div className="container">
        <div class="row mb-3">
          <div className="col-md-2 themed-grid-col">Title</div>
          <div className="col-md-2 themed-grid-col">Genre</div>
          <div className="col-md-2 themed-grid-col">Stock</div>
          <div className="col-md-2 themed-grid-col">Rate</div>
          <div className="col-md-2 themed-grid-col"></div>
        </div>
        {this.listitems}
      </div>
    );
  }
}

export default Movies;
