
export type InitialStateType = typeof initState

const initState = {
    isLoading: false

}

export const loadingReducer = (state= initState, action: LoadingACType): InitialStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING' : {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading:boolean) => ( {type:'IS-LOADING', isLoading,} as const) // fix any