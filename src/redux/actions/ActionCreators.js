import {ActionTypes} from '../constance/actionTypes';

const setUserDeatils = (userdetails)=>{
    return {
        type:ActionTypes.USER_DETAILS,
        payload:userdetails
    }
}
const setLoggedIn = ()=>{
    return {
        type:ActionTypes.USER_LOGGED_IN
    }
}
export {
    setUserDeatils,setLoggedIn
}