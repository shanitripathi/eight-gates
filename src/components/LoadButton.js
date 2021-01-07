import React from "react";
import { useSelector } from "react-redux";
import { gamesReducer } from "../reducers/gamesReducer";
import styled from "styled-components";
const LoadButton = ({ loadMore, initial, final }) => {
  const { btnShow } = useSelector((state) => state.gamesReducer);
  console.log(btnShow);
  return (
    <>
      {btnShow && (
        <div className="text-center w-100 mt-4">
          <button
            className="btn btn-primary mt-4 m-auto"
            onClick={() => {
              loadMore(initial, final);
            }}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default LoadButton;
