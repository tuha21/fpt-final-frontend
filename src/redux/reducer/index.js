import { combineReducers } from "redux";
import isLogin from "./isLogin"
import profile from "./profile"
import categories from "./categories"
import categoryDetail from "./categoryDetail"
import paginate from "./paginate"
import catalogAction from "./catalogAction"

var myReducer = combineReducers({
    isLogin,
    profile,
    categories,
    categoryDetail,
    paginate,
    catalogAction
})

export default myReducer;
