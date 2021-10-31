import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryList from '../CategoryList/CategoryList';
import SiderBar from '../siderbar/SiderBar';
import TopBar from '../topbar/TopBar';
import CategoryDetail from '../categoryDetail/CategoryDetail';
import Dashboard from '../dashboard/Dashboard';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
class AdminPage extends Component {
    render() {
        return (
            <div className="admin-page">
                <Router>
                    <SiderBar />
                    <TopBar />
                    <div className="content">
                        <Route exact path="/">
                            <Dashboard />
                        </Route>
                        <Route path="/categories">
                            <CategoryList />
                        </Route>
                        <Route path="/categoryDetail">
                            <CategoryDetail />
                        </Route>
                    </div>
                </Router>
            </div>
        )
    }
}
const mapSateToProps = state => {
    return {
        isLogin: state.isLogin,
        profile: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapSateToProps, mapDispatchToProps)(AdminPage);