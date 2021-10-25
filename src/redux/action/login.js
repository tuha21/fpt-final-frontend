import { SET_IS_LOGIN, SET_PROFILE } from '../../constant/const'

export const setIsLogin = (isLogin) => {
    return {
        type: SET_IS_LOGIN,
        isLogin
    }
}

export const setProfile = (profile) => {
    return {
        type : SET_PROFILE,
        profile
    }
}