import { applyMiddleware, createStore } from 'redux';
import RootReducer from './RootReducer';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
  // auth: {},
  // user: {},
  // profile: {},
  // post: {},
};

const middleware = [thunk];

const create_store = createStore(
  RootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
);
// const legacy_createStore_store = legacy_createStore();
// const store_hook = createStoreHook();
export default create_store;
