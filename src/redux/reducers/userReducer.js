import { ActionTypes } from "../constance/actionTypes";
const initialState = {
    loggedIn:'false',
    userdetails:{}
}

export const userReducer=(state=initialState,action)=>{
    switch (action.type){
        case ActionTypes.USER_DETAILS:{
            return {
                ...state,
                userdetails:action.payload
            }
        }
        default:
        return state
    }
}