import { iAction } from "../../types/store.interface"

const PLAN_INITIAL_STATE = {
    planOption: 'Arcade',
    planTime: 'Mensal'
}

export const planReducer = (state = PLAN_INITIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "SET_PLAN_OPTION":
            return {
                ...state,
                planOption: action.payload
            }
        case "SET_PLAN_TIME":
            return {
                ...state,
                planTime: action.payload
            }
        default:
            return state
    }
}