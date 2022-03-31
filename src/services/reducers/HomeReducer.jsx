import { HOME_ITEMS } from '../Constants'
const initialState = {
    homeData: []
};
export default function homeItems(state = initialState, action) {
    switch (action.type) {
        case HOME_ITEMS:
            console.warn("homeitems",action)
            return {
                ...state,
                homeData: action.data
            }
        default:
            return state;
    }


}