import React from "react";
import Home from "../pages/Home";
import GlobalStyle from "../components/GlobalStyles";
import { Route } from "react-router-dom";
import UpcomingGames from "../pages/UpcomingGames";
import PopularGames from "../pages/PopularGames";
import NewGames from "../pages/NewGames";

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/upcominggames">
          <UpcomingGames />
        </Route>
        <Route exact path="/populargames">
          <PopularGames />
        </Route>
        <Route exact path="/newgames">
          <NewGames />
        </Route>
      </div>
    );
  }
}

export default App;
