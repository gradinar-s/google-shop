import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
// Reducers ================================================
import { cardProductReducer } from "./cardProductReducer";
import { appReducer } from "./appReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./authReducer";

const reducers = combineReducers({
  cardProduct: cardProductReducer,
  auth: authReducer,
  app: appReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
