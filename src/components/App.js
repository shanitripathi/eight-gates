import React from "react";

import GlobalStyle from "../components/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "../Routes";

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          <Routes>
            {AppRoutes[0].routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
              />
            ))}
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
