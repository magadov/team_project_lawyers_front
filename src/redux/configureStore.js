import { createLogger } from "redux-logger/src";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const store = createStore(applyMiddleware(thunk, logger));

export default store;