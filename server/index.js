// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("../src/pages/Home").default;

import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "../src/Routes";
import render from "./render";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "../src/reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.component.loadData ? route.component.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(render(req, store));
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
