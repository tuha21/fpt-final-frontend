import { SET_IS_LOGIN } from "../../constant/const"

const isLogin = false;

var myReducer = (state = isLogin, action) => {
    switch (action.type) {
        case SET_IS_LOGIN: {
            return action.isLogin;
        }
        default: return state;
    }
}

export default myReducer;