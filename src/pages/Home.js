import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames, removeSearch } from "../actions";
import Nav from "../components/Nav";
import GameDetail from "../components/GameDetail";

import Loader from "../components/Loader";
import GameSection from "../components/GameSection";
import SearchedSection from "../components/SearchedSection";

const Home = () => {
  const dispatch = useDispatch();

  const {
    popularGames,
    newGames,
    upcomingGames,
    searched,
    gamesLength,
  } = useSelector((state) => {
    return state.gamesReducer;
  });
  const clearSearch = () => {
    dispatch(removeSearch());
  };

  useEffect(() => {
    dispatch(loadGames(0, 6));
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div className="home">
      {(popularGames[0] && (
        <>
          <Nav />
          <GameDetail />
          <SearchedSection
            sectionTitle="searched"
            sectionName={searched}
            clearSearch={clearSearch}
          />
          <GameSection
            sectionTitle="upcoming"
            sectionName={upcomingGames}
            final={10}
            link="/upcominggames"
          />
          <GameSection
            sectionTitle="popular"
            sectionName={popularGames}
            final={10}
            link="/populargames"
          />
          <GameSection
            sectionTitle="new"
            sectionName={newGames}
            final={10}
            link="/newgames"
          />
        </>
      )) || <Loader />}
    </div>
  );
};

export default Home;
