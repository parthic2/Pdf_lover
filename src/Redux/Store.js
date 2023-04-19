import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";

// const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
