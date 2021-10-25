import { SET_LIST_CATEGORY } from "../../constant/const";

const categories = [];

var myReducer = (state = categories, action) => {
    switch(action.type) {
        case SET_LIST_CATEGORY : {
            return action.categories;
        }
        default: return state;
    }
}

export default myReducer