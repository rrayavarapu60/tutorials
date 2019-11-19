import React, { Component } from "react";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import "font-awesome/css/font-awesome.min.css";
import Pagination from "./common/pagination";
import MovieTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import { paginate } from "./util/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    moviesCount: 0,
    selectedGenre: [{ name: "AllGenres" }],
    sortedPath: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const movies = getMovies();
    this.setState({
      movies,
      moviesCount: movies.length,
      genres: [{ name: "AllGenres" }, ...getGenres()]
    });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortedPath => {
    // const sortedPath = { path: column, order: "asc" };
    console.log("handle sort: ", sortedPath);
    this.setState({
      sortedPath
    });
  };

  onGenreChange = Genre => {
    console.log("on genre change: ", Genre);
    this.setState({ selectedGenre: Genre, currentPage: 1 });
  };

  getPagedMovies = () => {
    const {
      pageSize,
      currentPage,
      movies,
      selectedGenre,
      sortedPath
    } = this.state;

    const sortedMovies = _.orderBy(
      movies,
      [sortedPath.path],
      [sortedPath.order]
    );

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? sortedMovies.filter(m => m.genre.name === selectedGenre.name)
        : sortedMovies;

    const paginatedMovies = paginate(filteredMovies, currentPage, pageSize);

    return { totalMovieCount: filteredMovies.length, data: paginatedMovies };
  };

  render() {
    const { pageSize, currentPage, moviesCount, sortedPath } = this.state;

    if (moviesCount === 0)
      return <p align="center">There are no movies to show in the database</p>;

    const { totalMovieCount, data: paginatedMovies } = this.getPagedMovies();

    return (
      <div className="row" padding="20px" margin="1 15 10 10">
        <div className="col4">
          <ListGroup
            Genres={this.state.genres}
            onGenreChange={this.onGenreChange}
            selectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <MovieTable
            movies={paginatedMovies}
            length={totalMovieCount}
            handleLike={this.handleLike}
            handleDelete={this.handleDelete}
            onSort={this.handleSort}
            sortedPath={sortedPath}
          />
          <Pagination
            itemsCount={totalMovieCount}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
