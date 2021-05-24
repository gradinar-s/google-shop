import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
// Reducers ================================================
import { cardProductReducer } from "./cardProductReducer";
import { appReducer } from "./appReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  cardProduct: cardProductReducer,
  app: appReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
