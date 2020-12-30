const initState = {
  game: {},
  screenshots: {},
  isLoading: true,
};

export const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return { ...state, ...action.payload };
    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    case "EXIT_CARD":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
