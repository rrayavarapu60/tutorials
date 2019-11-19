import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Like from "./common/like";
import Table from "./common/table";

class MovieTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "liked",
      content: movie => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.handleLike(movie)}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          type="submit"
          className="btn btn-sm btn-danger"
          onClick={() => this.props.handleDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, length, onSort, sortedPath } = this.props;

    return (
      <div>
        <p align="center">Showing {length} movies in the database</p>
        <Table
          data={movies}
          columns={this.columns}
          sortedPath={sortedPath}
          onSort={onSort}
        />
      </div>
    );
  }
}

export default MovieTable;
