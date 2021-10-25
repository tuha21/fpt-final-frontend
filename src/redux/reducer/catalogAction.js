import { SET_CATALOG_ACTION } from "../../constant/const"

const act = 0;

var myReducer = (state = act, action) => {
    switch(action.type) {
        case SET_CATALOG_ACTION: {
            return action.action;
        }  
        default: return state
    }
}

export default myReducer