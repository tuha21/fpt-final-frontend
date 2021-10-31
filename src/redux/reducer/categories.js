import { DELETE_CATEGORY, SET_LIST_CATEGORY } from "../../constant/const";

const categories = [];

var myReducer = (state = categories, action) => {
    switch (action.type) {
        case SET_LIST_CATEGORY: {
            return action.categories;
        }
        case DELETE_CATEGORY: {
            return [...state.filter(val => {
                return val.id !== action.id
            })]
        }
        default: return state;
    }
}

export default myReducer