import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./components/App";
import ReduxPromise from "redux-promise";
import ScrollToTop from "./components/ScrollToTop";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <ScrollToTop />
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
