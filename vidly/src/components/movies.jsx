import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "font-awesome/css/font-awesome.min.css";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = { movies: getMovies(), pageSize: 4 };

  handleDelete = movie => {
    console.log("Delete clicked for movie: ", movie);
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = movie => {
    console.log("Heart clicked");
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    console.log("page clicked");
  };

  render() {
    // console.log(this.state);

    const { length: moviesCount } = this.state.movies;

    if (moviesCount === 0)
      return <p align="center">There are no movies to show in the database</p>;

    return (
      <React.Fragment>
        <p align="center">Showing {moviesCount} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-sm btn-danger"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={moviesCount}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
