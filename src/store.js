import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

export default createStore(
    reducer, // manages changes date in the store/state
    { // initial state
    term: "",
    images: [],
    status: "initial"
    }, 
    applyMiddleware(thunk) // used for async code in redux
);