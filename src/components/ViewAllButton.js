import React from "react";
import { Link } from "react-router-dom";

const ViewAllButton = ({ link }) => {
  return (
    <div className="text-center py-4">
      <Link className="btn btn-primary" to={link}>
        View All
      </Link>
    </div>
  );
};

export default ViewAllButton;
