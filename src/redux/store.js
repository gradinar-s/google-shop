import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cardProductReducer } from "./cardProductReducer";
// import createSagaMiddleware from "redux-saga";
// import { sagaWatcher } from "./cardProductReducer";

const reducers = combineReducers({
  cardProduct: cardProductReducer,
});

// const saga = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(thunk));

// saga.run(sagaWatcher);

window.store = store;
export default store;
