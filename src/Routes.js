import React from "react";
import App from "./components/App";
import Home from "./pages/Home";
import NewGames from "./pages/NewGames";
import PopularGames from "./pages/PopularGames";
import UpcomingGames from "./pages/UpcomingGames";

const Routes = [
  {
    component: App,
    routes: [
      { component: Home, path: "/", exact: true },
      { component: NewGames, path: "/newgames", exact: false },
      { component: UpcomingGames, path: "/upcominggames", exact: false },
      { component: PopularGames, path: "/populargames", exact: false },
    ],
  },
];

export default Routes;
