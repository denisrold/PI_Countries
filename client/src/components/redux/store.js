import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../redux/reducer";

const store = createStore(reducer, applyMiddleware(thunk)); // Handling of asynchronous operations"
export default store;
