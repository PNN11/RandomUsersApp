import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./users";

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
