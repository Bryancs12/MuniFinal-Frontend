import { types } from "../types/types";


const initialState = {
    cheking: true
}


export const authReducer = (state = initialState, action) =>{
    switch (action.type) {

        case types.authLogin:
            return{
                ...state,
                ...action.payload,
                cheking: false,
                token: action.payload.token
            }

        case types.authChekingFinish:
            return{
                ...state,
                cheking: false
            }

        case types.authLogout:
            return{
                cheking:false
            }
    
        default:
            return state
    }
}