import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cardProductReducer } from "./cardProductReducer";

const reducers = combineReducers({
  cardProduct: cardProductReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;
