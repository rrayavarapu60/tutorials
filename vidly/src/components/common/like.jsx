import React from "react";
import "font-awesome/css/font-awesome.min.css";

const Like = props => {
  let classname = "fa fa-heart";
  console.log("like module");
  if (!props.liked) {
    classname += "-o";
  }

  return (
    <i
      className={classname}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    ></i>
  );
};

export default Like;
