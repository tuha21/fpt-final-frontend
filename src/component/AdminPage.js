import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryList from './CategoryList';
import SiderBar from './SiderBar';
import TopBar from './TopBar';
import CategoryDetail from './CategoryDetail';
import Dashboard from './Dashboard';
import Login from './Login'
import "../css/adminpage/adminpage.css"
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
						<Route path="/login">
							<Login />
						</Route>
					</div>
				</Router>
			</div>
		)
	}
}
const mapSateToProps = state => {
	return {
		profile: state.profile
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}

export default connect(mapSateToProps, mapDispatchToProps)(AdminPage);