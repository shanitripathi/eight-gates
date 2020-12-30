import React from "react";
import Home from "../pages/Home";
import GlobalStyle from "../components/GlobalStyles";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />

        <Route exact path="/">
          <Home />
        </Route>
      </div>
    );
  }
}

export default App;
