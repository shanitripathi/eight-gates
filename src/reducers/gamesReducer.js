const initState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
  btnShow: true,
};

export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, ...action.payload };
    case "SEARCH_GAMES":
      return { ...state, ...action.payload };
    case "REMOVE_SEARCH":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
