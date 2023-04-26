import { iAction, iFormValues } from "../../types/store.interface"

const FORM_VALUES_INITIAL_STATE: iFormValues = {
    name: '',
    email: '',
    phone: '',
    addons: {
        onlineService: false,
        largerStorage: false,
        customProfile: false 
    }
}

export const formValuesReducer = (state = FORM_VALUES_INITIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "SET_FORM_VALUES":
            return {
                ...state,
                ...action.payload
            }
        case "SET_ADDONS": 
            return {
                ...state,
                addons: action.payload
            }
        default:
            return state
    }
}