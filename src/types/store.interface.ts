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
}

export type Plans = "Arcade" | "Advanced" | "Pro"

export type PlanTime = "Mensal" | "Anual"