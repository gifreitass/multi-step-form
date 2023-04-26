import { combineReducers, createStore } from "redux";
import { formValuesReducer } from "./formValues/reducer";
import { planReducer } from "./plans/reducer";
import { stepReducer } from "./step/reducer";

const reducers = combineReducers({
    step: stepReducer,
    plan: planReducer,
    formValues: formValuesReducer
})

const store = createStore(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export default store