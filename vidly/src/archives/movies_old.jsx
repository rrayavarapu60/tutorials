import React, { Component } from "react";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import "font-awesome/css/font-awesome.min.css";
//import Like from "./common/like";
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
    selectedGenre: "AllGenres"
  };

  componentDidMount() {
    const movies = getMovies();
    // console.log("componenet did mount ");
    this.setState({
      movies: movies,
      moviesCount: movies.length,
      genres: [{ name: "AllGenres" }, ...getGenres()]
    });
  }

  handleDelete = movie => {
    //  console.log("Delete clicked for movie: ", movie);
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = movie => {
    console.log("Heart clicked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
    console.log("page clicked: ", page);
  };

  handleSort = column => {
    this.setState({
      movies: _.orderBy(this.state.movies, [column], ["asc"])
    });
  };

  onGenreChange = Genre => {
    // console.log("movies: ", this.state.movies);
    const movies = getMovies();
    const filteredMovies = movies.filter(m => m.genre.name === Genre);
    const setMovies = filteredMovies.length === 0 ? movies : filteredMovies;
    this.setState({
      movies: setMovies,
      // genre: { name: "AllGenres", ...getGenres() },
      selectedGenre: Genre,
      currentPage: 1,
      moviesCount: setMovies.length
    });
  };

  render() {
    // console.log(this.state);

    const { pageSize, currentPage, movies, moviesCount } = this.state;

    if (moviesCount === 0)
      return <p align="center">There are no movies to show in the database</p>;

    console.log("movies: ", movies);

    const paginatedMovies = paginate(movies, currentPage, pageSize);

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
            length={moviesCount}
            handleLike={this.handleLike}
            handleDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={moviesCount}
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
