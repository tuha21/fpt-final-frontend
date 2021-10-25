import React, { Component } from 'react'
import Page from './component/Page'
import { IsLoginProvider } from './context/IsLogin';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }


    onChangeIsLogin = (isLogin) => {
        this.setState({
            isLogin
        })
    }
    render() {
        var {isLogin} = this.state
        return (
            <IsLoginProvider value={{ isLogin, toggleIsLogin: this.onChangeIsLogin }}>
                <Page />
            </IsLoginProvider>
        )
    }
}
