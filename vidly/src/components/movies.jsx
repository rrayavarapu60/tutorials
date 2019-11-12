import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import "font-awesome/css/font-awesome.min.css";
import Like from "./common/like";
import Pagination from "./common/pagination";
import MovieTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import { paginate } from "./util/paginate";

class Movies extends Component {
  state = { movies: [], genres: [], pageSize: 4, currentPage: 1 };

  componentDidMount() {
    const genres = getGenres();
    // console.log("genres: ", genres);
    this.setState({
      movies: getMovies(),
      moviesCount: getMovies().length,
      genres: genres
    });
  }

  handleDelete = movie => {
    //  console.log("Delete clicked for movie: ", movie);
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = movie => {
    // console.log("Heart clicked");
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
    // console.log("page clicked: ", page);
  };

  onGenreChange = Genre => {
    // console.log("movies: ", this.state.movies);
    const movies = getMovies();
    const filteredMovies = movies.filter(m => m.genre.name === Genre);
    // console.log("filtered movies: ", filteredMovies);
    this.setState({
      movies: filteredMovies.length === 0 ? movies : filteredMovies,
      genre: { name: "AllGenres", ...getGenres() },
      console.log()
      selectedGenre: Genre,
      currentPage: 1
    });
  };

  render() {
    // console.log(this.state);

    const {
      pageSize,
      currentPage,
      movies: Allmovies,
      moviesCount
    } = this.state;

    if (moviesCount === 0)
      return <p align="center">There are no movies to show in the database</p>;

    const movies = paginate(Allmovies, currentPage, pageSize);

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
            movies={Allmovies}
            length={moviesCount}
            handleLike={this.state.handleLike}
            handleDelete={this.state.handleDelete}
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
