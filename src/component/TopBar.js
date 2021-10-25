import React, { Component } from 'react'
import "../css/topbar/topbar.css"
import LoginService from "../service/loginService"
import * as loginAction from "../redux/action/login"
import { connect } from "react-redux"
import { IsLogin } from '../context/IsLogin'
class TopBar extends Component {

	logOut = () => {
		localStorage.removeItem("token");
		var {toggleIsLogin} = this.context;
		toggleIsLogin(false)
		// this.props.setIsLogin(false);
		this.props.setProfile("")
	}

	render() {
		return (
			<div className="top-bar">
				<div className="row">
					<div className="col-lg-6 d-flex">
						<div className="search-group">
							<i className="fas fa-search btn btn-search"></i>
							<input className="txt-search" type="text" placeholder="Search" />
						</div>
					</div>
					<div className="col-lg-6 text-end">
						<div className="account">
							<img className="avatar" src="https://demo.dashboardpack.com/kero-html-sidebar-pro/assets/images/avatars/3.jpg" alt="This is avatar" />
							<i class="fas fa-angle-down"></i>
							<div className="account-action">
								<button onClick={this.logOut} className="btn btn-warning">Logout</button>
								<button className="btn btn-warning">Change Password</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIsLogin: isLogin => {
            dispatch(loginAction.setIsLogin(isLogin))
        },
        setProfile: profile => {
            dispatch(loginAction.setProfile(profile))
        }
    }
}

TopBar.contextType = IsLogin

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);