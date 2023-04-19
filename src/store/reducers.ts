import { iAction } from "../types/store.interface"

const STEP_INICIAL_STATE = {
    stepInformation: '1'
}

const stepReducer = (state = STEP_INICIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "SET_PAGE_STEP":
            return {
                ...state,
                stepInformation: action.payload
            }
        default:
            return state
    }
}

export default stepReducer