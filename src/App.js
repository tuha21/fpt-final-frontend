import React, { Component } from 'react';
import Home from "./components/home/Home";
import { connect } from "react-redux"
import AdminPage from "./components/adminPage/AdminPage"
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
class App extends Component {
    render() {

        var { isLogin } = this.props

        return (
            <div>
                <Router>
                    {isLogin ? <AdminPage /> : <Home />}
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin
    }
}

const mapStateToDispatch = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapStateToDispatch)(App);