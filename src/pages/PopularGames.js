import React, { useEffect } from "react";
import GameSection from "../components/GameSection";
import { useSelector, useDispatch } from "react-redux";
import { loadGames } from "../actions";
import GameDetail from "../components/GameDetail";

const PopularGames = () => {
  const { popularGames } = useSelector((state) => state.gamesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames(0, 50));
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <div>
      <GameDetail />
      <GameSection
        sectionTitle="popular"
        sectionName={popularGames}
        final={50}
      />
    </div>
  );
};

PopularGames.loadData = (store) => {
  return store.dispatch(loadGames(0, 50));
};

export default PopularGames;
