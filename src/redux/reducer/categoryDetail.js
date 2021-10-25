import {SET_CATEGORY_DETAIL} from "../../constant/const"

const categoryDetail = { 
    id: "", 
    code: "", 
    name: "", 
    description: "", 
    createdDate: "", 
    updatedDate: "" 
}

var myReducer = (state = categoryDetail, action) => {
    switch(action.type) {
        case SET_CATEGORY_DETAIL: {
            return action.category;
        }
        default: return state;
    }
}

export default myReducer;