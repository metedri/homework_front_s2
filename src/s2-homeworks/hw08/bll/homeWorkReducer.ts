import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copySate = [...state]
            if (action.payload === 'up'){
                copySate.sort((a, b) => {
                   if(a.name > b.name) {
                    return 1
                   }
                   return -1
                })
            }
            if (action.payload === 'down'){
                copySate.sort((a, b) => {
                    if(a.name < b.name) {
                     return 1
                    }
                    return -1
                 })
            }
            return copySate // need to fix
        }
        case 'check': {
            return state.filter(u=> u.age>18) // need to fix
        }
        default:
            return state
    }
}
