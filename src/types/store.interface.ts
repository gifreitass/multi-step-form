export interface iAction {
    type: string,
    payload: any
}

export interface iState {
    step: {
        stepInformation: string
    }
}