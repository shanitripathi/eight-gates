import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../src/Routes";
import serialize from "serialize-javascript";

import { renderRoutes } from "react-router-config";

const func = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  //   const content = renderToString(<Home />);
  return `
  <html>
    <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    </head>
    <body>
        <div id="root">${content}</div>
        // <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
        <script src="bundle.js"></script>
    </body>
  </html>
  `;
};

export default func;
