import { DELETE_CATEGORY, SET_CATEGORY_DETAIL, SET_LIST_CATEGORY } from "../../constant/const"

export const setListCategory = categories => {
    return {
        type: SET_LIST_CATEGORY,
        categories
    }
}

export const setCategoryDetail = category => {
    return {
        type: SET_CATEGORY_DETAIL,
        category
    }
}

export const deleteCategory = id => {
    return {
        type: DELETE_CATEGORY,
        id
    }
}