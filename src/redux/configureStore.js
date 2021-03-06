import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import application from './features/application';
import categories from './features/categories';
import {profileReducer} from "./features/profileReducer";

const store = createStore(
  combineReducers({
    application, categories,
      lawyerReducer: profileReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
