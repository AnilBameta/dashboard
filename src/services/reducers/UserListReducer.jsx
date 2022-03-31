import {  DELETE_USER, USER_LIST } from '../Constants'
const initialState = {
    userData: []
};
export default function userList(state = initialState, action) {
    switch (action.type) {
        case USER_LIST:
            console.warn("reducer",action)
            return {
                ...state,
                userData: action.data
            }
            case DELETE_USER:
                return {
                    
                }
        default:
            return state;
    }


}