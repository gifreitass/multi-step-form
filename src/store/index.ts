import { combineReducers, createStore } from "redux";
import stepReducer from "./reducers";

const reducers = combineReducers({
    step: stepReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store