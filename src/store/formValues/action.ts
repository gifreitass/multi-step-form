import { iAddonsValues, iUserValues } from "../../types/store.interface"

export const setFormValuesAction = (formValue: iUserValues) => {
    return {
        type: "SET_FORM_VALUES",
        payload: formValue
    }
}

export const setAddonsAction = (addons: iAddonsValues) => {
    return {
        type: "SET_ADDONS",
        payload: addons
    }
}