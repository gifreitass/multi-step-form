import { Plans, PlanTime } from "../../types/store.interface"

export const setPlanOptionAction = (plan: Plans) => {
    return {
        type: "SET_PLAN_OPTION",
        payload: plan
    }
}

export const setPlanTimeAction = (time: PlanTime) => {
    return {
        type: "SET_PLAN_TIME",
        payload: time
    }
}
