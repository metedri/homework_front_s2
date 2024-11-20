const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionType): State => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})


type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

type ActionType = LoadingActionType

type State = {
    isLoading: boolean
}
