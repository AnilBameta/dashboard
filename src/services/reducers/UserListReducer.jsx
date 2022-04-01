import {  DELETE_USER, USER_LIST } from '../Constants'
const initialState = {
    userData: []
};
export default function userList(state = initialState, action) {
    switch (action.type) {
        case USER_LIST:
            console.warn("state",state)
            return {
                ...state,
                userData: action.data
            }
            case DELETE_USER:
                console.warn("deletestate",state)
                console.warn("deleteid",action.data)
                let state1=state.userData.filter((item) => item.id !== action.data)
                console.log("newState",state1)
                return {
                 ...state1,
                 userData: state1
                }
        default:
            return state;
    }


}