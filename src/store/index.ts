import { combineReducers, createStore } from "redux";
import { planReducer } from "./plans/reducer";
import { stepReducer } from "./step/reducer";

const reducers = combineReducers({
    step: stepReducer,
    plan: planReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store