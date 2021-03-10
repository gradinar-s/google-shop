import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
// Reducers ================================================
import { cardProductReducer } from "./cardProductReducer";

const reducers = combineReducers({
  cardProduct: cardProductReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
