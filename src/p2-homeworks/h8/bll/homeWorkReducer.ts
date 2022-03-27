import {UserType} from "../HW8";

export type ActionsType = SortUpReducerACType
    | SortDownReducerACType
    | CheckReducerACType


export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.name <= b.name ? -1 : 1)]
            }
            else if (action.payload === 'down') {
                return [...state.sort((a, b) => b.name <= b.name ? -1 : 1)]
            }
            return state
        }
        case 'check': {
            // need to fix
            return state.filter(f=>f.age>action.payload - 1)
        }
        default:
            return state
    }
}


export type SortUpReducerACType = ReturnType<typeof SortUpReducerAC>
export const SortUpReducerAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}
export type SortDownReducerACType = ReturnType<typeof SortDownReducerAC>
export const SortDownReducerAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}
export type CheckReducerACType = ReturnType<typeof CheckReducerAC>
export const CheckReducerAC = (payload:number) => {
    return {
        type: 'check',
        payload: 18
    } as const
}