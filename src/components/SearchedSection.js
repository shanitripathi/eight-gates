import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Game from "./Game";
import { fadeIn } from "../animations";

const SearchedSection = ({ sectionTitle, sectionName, clearSearch }) => {
  return (
    <AnimatePresence>
      {sectionName[0] && (
        <GameList
          exit={{ opacity: 0 }}
          className="container-fluid"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          <div className="h2-wrapper">
            <h2>{sectionTitle} Games </h2>
            <button onClick={clearSearch} className="btn btn-primary btn-clear">
              CLEAR
            </button>
          </div>

          <Games className="row">
            {sectionName.map((game) => {
              return (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              );
            })}
          </Games>
        </GameList>
      )}
    </AnimatePresence>
  );
};

const GameList = styled(motion.div)`
  margin-top: 100px;
  .h2-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    padding: 0.5rem 0.2rem;
    background-color: #3f3f3f;
    display: inline-block;
    color: #ffe06b;

    font-weight: bolder;
    @media (max-width: 500px) {
      font-size: 1.4rem;
    }
  }
  button {
    display: flex;
    font-weight: 800;
    border-radius: 10%;
    height: 30px;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
  }
`;
const Games = styled(motion.div)``;

export default SearchedSection;
