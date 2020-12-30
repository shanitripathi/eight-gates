import { gamesReducer } from "./gamesReducer";
import { detailReducer } from "./detailReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  gamesReducer,
  detailReducer,
});
