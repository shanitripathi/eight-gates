import React from "react";

import GlobalStyle from "../components/GlobalStyles";
import { Route } from "react-router-dom";
import Routes from "../Routes";
import { renderRoutes } from "react-router-config";

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        {renderRoutes(Routes[0].routes)}
        {/* <Route exact path="/">
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
        </Route> */}
      </div>
    );
  }
}

export default App;
