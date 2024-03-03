import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { movieReducer } from "./reducers/moviereducer";

const rootReducer = combineReducers({
    movieReducer,
})


export default createStore(rootReducer, applyMiddleware(thunk));