import { SET_PAGINATE } from "../../constant/const"

const paginate = {
    page: 0,
    size: 5,
    prev: 0
}

var myReducer = (state = paginate, action) => {
    switch (action.type) {
        case SET_PAGINATE: {
            return action.page;
        }
        default: return state
    }
}

export default myReducer