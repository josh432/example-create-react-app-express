import React from "react";

const Jumbotron = ({ children }) => (
  <div style={{ height: 300, clear: "both", color: "purple" }} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;