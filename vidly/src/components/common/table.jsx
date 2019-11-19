import React from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ data, columns, sortedPath, onSort }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortedPath={sortedPath} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
