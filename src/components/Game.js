import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadDetail } from "../actions";
import { useDispatch } from "react-redux";

import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  const stringId = id.toString();

  const dispatch = useDispatch();
  const loadDetailHandle = (id) => {
    dispatch(loadDetail(id));

    document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      onClick={() => loadDetailHandle(id)}
      className="col-12 col-md-6 col-lg-4"
      LayoutId={stringId}
    >
      <div className="content">
        <div className="name-date-container">
          <h5>{name}</h5>
          <p>{released}</p>
        </div>

        <Image src={image} alt={name} />
      </div>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  text-align: center;
  cursor: pointer;

  .content {
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    margin: 10px 0px;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    transition: all 500ms ease-in-out;
    background-color: white;
    font-family: futura;
    &:hover {
      transform: scale(0.9);
    }

    overflow: hidden;
    .name-date-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      p {
        font-weight: bold;
        color: #696969;
      }
    }
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 230px;
  object-fit: cover;
`;

export default Game;
