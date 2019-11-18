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

  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map(m => (
            <th key={m.path || m.key} onClick={() => this.raiseSort(m.path)}>
              {m.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
