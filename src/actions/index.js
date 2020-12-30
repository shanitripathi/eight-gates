import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  gameDetailsUrl,
  gameScreenshotUrl,
  searchGameUrl,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularGames = await fetch(popularGamesUrl());
  const popularData = await popularGames.json();
  const upcomingGames = await fetch(upcomingGamesUrl());
  const upcomingData = await upcomingGames.json();
  const newGames = await fetch(newGamesUrl());
  const newData = await newGames.json();

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularData.results,
      upcomingGames: upcomingData.results,
      newGames: newData.results,
    },
  });
};

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const response = await fetch(gameDetailsUrl(id));
  const detailData = await response.json();
  const response2 = await fetch(gameScreenshotUrl(id));
  const screenshotData = await response2.json();

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData,
      screenshots: screenshotData,
      isLoading: false,
    },
  });
};

export const exitCard = () => {
  return {
    type: "EXIT_CARD",
    payload: {
      game: {},
      screenshots: {},
      isLoading: true,
    },
  };
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const response = await fetch(searchGameUrl(game_name));
  const searchGames = await response.json();
  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      searched: searchGames.results,
    },
  });
};

export const removeSearch = () => {
  return {
    type: "REMOVE_SEARCH",
    payload: {
      searched: [],
    },
  };
};
