import React, { Component } from "react";

// columns
// sortedpath
//
class TableHeader extends Component {
  raiseSort = column => {
    console.log("props sort path", this.props.sortedPath);
    const sortedPath = { ...this.props.sortedPath };
    if (sortedPath.path === column) {
      sortedPath.order = sortedPath.order === "asc" ? "desc" : "asc";
    } else {
      sortedPath.path = column;
      sortedPath.order = "asc";
    }
    this.props.onSort(sortedPath);
    console.log("sorted path:", sortedPath);
  };

  sortIcon = column => {
    const { sortedPath } = this.props;

    if (sortedPath.path !== column.path) return null;

    if (sortedPath.order === "asc")
      return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
    return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
  };

  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map(m => (
            <th key={m.path || m.key} onClick={() => this.raiseSort(m.path)}>
              {m.label} {this.sortIcon(m)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
