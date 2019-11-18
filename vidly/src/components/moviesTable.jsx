import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

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
        <table className="table">
          <TableHeader
            columns={this.columns}
            sortedPath={sortedPath}
            onSort={onSort}
          />

          <TableBody data={movies} Like={Like} columns={this.columns} />
          {/* <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onClick={() => handleLike(movie)} />
                </td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    );
  }
}

export default MovieTable;

// const MovieTable = props => {
//   const { movies, length, handleLike, handleDelete, onSort } = props;
//   console.log("in movies table module", movies, length);
//   return (
//     <div>
//       <p align="center">Showing {length} movies in the database</p>
//       <table className="table">
//         <thead>
//           <tr>
//             <th onClick={() => onSort("title")}>
//               Title <i className="fa fa-arrow-down sm"></i>
//             </th>
//             <th onClick={() => onSort("genre.name")}>Genre</th>
//             <th onClick={() => onSort("numberInStock")}>Stock</th>
//             <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
//             <th></th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {movies.map(movie => (
//             <tr key={movie._id}>
//               <td>{movie.title}</td>
//               <td>{movie.genre.name}</td>
//               <td>{movie.numberInStock}</td>
//               <td>{movie.dailyRentalRate}</td>
//               <td>
//                 <Like liked={movie.liked} onClick={() => handleLike(movie)} />
//               </td>
//               <td>
//                 <button
//                   type="submit"
//                   className="btn btn-sm btn-danger"
//                   onClick={() => handleDelete(movie)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MovieTable;
