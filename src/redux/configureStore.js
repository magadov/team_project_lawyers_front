import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import application from './features/application';
import categories from './features/categories';

const store = createStore(
  combineReducers({
    application, categories
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
