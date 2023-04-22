export interface iAction {
    type: string,
    payload: any
}

export interface iState {
    step: {
        stepInformation: string
    }
    plan: {
        planOption: Plans,
        planTime: PlanTime
    }
    formValues: iFormValues
}

export interface iFormValues extends iUserValues {
    addons: iAddonsValues
}

export interface iUserValues {
    name: string,
    email: string,
    phone: string,
}

export interface iAddonsValues {
    onlineService: boolean,
    largerStorage: boolean,
    customProfile: boolean
}

export type Plans = "Arcade" | "Advanced" | "Pro"

export type PlanTime = "Mensal" | "Anual"

export type Addons = keyof iAddonsValues