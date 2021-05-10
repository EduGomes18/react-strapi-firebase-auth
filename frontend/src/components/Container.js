import React from "react";

function Container({ bg, children }) {
  return <div className={`${bg ? bg : ""} container-center`}>{children}</div>;
}

export default Container;
