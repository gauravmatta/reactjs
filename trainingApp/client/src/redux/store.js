import { applyMiddleware, createStore } from 'redux';
import RootReducer from './RootReducer';
import {thunk} from 'redux-thunk';
const initialState = {
  auth: {},
  user: {},
  profile: {},
  post: {},
};

const middleware = [thunk];

const create_store = createStore(RootReducer, initialState, applyMiddleware(...middleware));
// const legacy_createStore_store = legacy_createStore();
// const store_hook = createStoreHook();
export default create_store;
