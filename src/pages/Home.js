import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames, removeSearch } from "../actions";
import Game from "../components/Game";
import Nav from "../components/Nav";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

const Home = () => {
  const dispatch = useDispatch();
  const { popularGames, newGames, upcomingGames, searched } = useSelector(
    (state) => {
      return state.gamesReducer;
    }
  );
  const clearSearch = () => {
    dispatch(removeSearch());
  };

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  return (
    <React.Fragment>
      {popularGames[0] && (
        <>
          <Nav />
          <GameDetail />
          {searched[0] && (
            <GameList
              className="container-fluid"
              variants={fadeIn}
              initial="hidden"
              animate="show"
            >
              <div className="h2-wrapper">
                <h2>Searched Games </h2>
                <button
                  onClick={clearSearch}
                  className="btn btn-primary btn-clear"
                >
                  CLEAR
                </button>
              </div>

              <Games className="row">
                {searched.map((game) => {
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
          <GameList className="container-fluid">
            <h2 id="upcoming">Upcoming Games</h2>
            <Games className="row">
              {upcomingGames.map((game) => {
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
          <GameList className="container-fluid">
            <h2 id="popular">Popular Games</h2>
            <Games className="row">
              {popularGames.map((game) => {
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
          <GameList className="container-fluid">
            <h2 id="new">New Games</h2>
            <Games className="row">
              {newGames.map((game) => {
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
        </>
      )}
    </React.Fragment>
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
      font-size: 1.1rem;
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

export default Home;
