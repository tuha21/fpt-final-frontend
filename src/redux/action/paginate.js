import { SET_PAGINATE } from "../../constant/const"

export const setPaginate = page => {
    return {
        type: SET_PAGINATE,
        page
    }
}