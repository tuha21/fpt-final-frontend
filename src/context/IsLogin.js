import React from "react";

export const IsLogin = React.createContext({
    isLogin: false,
    toggleIsLogin: () => {
    }
})

export const IsLoginProvider = IsLogin.Provider;
export const IsLoginConsumer = IsLogin.Consumer;