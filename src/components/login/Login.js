import React, { Component } from 'react'
import LoginService from "../../service/loginService"
import * as loginAction from "../../redux/action/login"
import { connect } from "react-redux"
// import { IsLogin } from '../context/IsLogin'
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtUsername: "",
            txtPassword: "",
            noite: ""
        }
    }

    componentDidMount = () => {
        // console.log(this.context)
    }

    login = (e) => {
        e.preventDefault();
        // let { toggleIsLogin } = this.context
        var { txtUsername, txtPassword } = this.state
        if (this.validateForm(txtUsername, txtPassword)) {
            LoginService.login(txtUsername, txtPassword)
                .then(response => {
                    console.log(response.status)
                    if (response.status === 200) {
                        return response.text();
                    }
                    throw Error(response.status)
                })
                .then(result => {
                    // toggleIsLogin(true) //use context
                    this.props.setIsLogin(true) // use redux
                    this.props.setProfile(txtUsername)
                    this.setState({
                        noite: ""
                    })
                    alert("Login success!")
                    localStorage.setItem("token", result)
                })
                .catch(error => {
                    console.log(error)
                    this.setState({
                        noite: "Username or password is incorrect!"
                    })
                });
        }
    }

    validateForm = (username, password) => {
        if (username === "") {
            this.setState({
                noite: "Username is required!"
            })
            return false;
        }
        if (password === "") {
            this.setState({
                noite: "Password is required!"
            })
            return false;
        }
        return true;
    }

    onChangeForm = (e) => {
        var name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        var { noite } = this.state
        return (
            <div className="login-page">
                <div className="container">
                    <div className="login-content">
                        <div className="row">
                            <div className="col-lg-6 d-flex">
                                <img className="banner" src="https://bizweb.dktcdn.net/100/335/444/themes/836844/assets/bg_login.jpg?1632996896560" alt="" />
                            </div>
                            <div className="col-lg-6 d-flex">
                                <form className="login-form">
                                    <h4 className="login-form-title">Login</h4>
                                    <div className="login-google-group">
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn-login-facebook"><i className="bi bi-facebook"></i> Facebook</button>
                                            </div>
                                            <div className="col">
                                                <button className="btn-login-google"><i className="bi bi-google"></i> Google</button>
                                            </div>
                                        </div>
                                        <h6>Or</h6>
                                    </div>
                                    <p className="notie">{noite}</p>
                                    <div className="mb-3">
                                        <h6 className="form-lable">Username<span> *</span></h6>
                                        <input type="text" name="txtUsername" onChange={this.onChangeForm} placeholder="Username" />
                                    </div>
                                    <div className="mb-3">
                                        <h6>Password<span> *</span></h6>
                                        <input type="password" name="txtPassword" onChange={this.onChangeForm} placeholder="Password" />
                                    </div>
                                    <button className="btn-login mb-5" onClick={this.login}>Login</button>
                                    <h6 className="text-center">Forgot password?</h6>
                                    <h6>You don't have an account, please register <a href="https://www.sapo.vn/phan-mem-quan-ly-ban-hang.html?campaign=search_thuonghieupos_hn_210520__sapo&utm_campaign=thuong_hieu_pos_210520_gg_search&utm_source=adwords&utm_medium=ppc&utm_content=sapo&gclid=CjwKCAjwn8SLBhAyEiwAHNTJbUc0UJNxb23Momj1jKDHkiQ-OvJHCV34xsi65PYa34sFDKhqdzDklBoCLRcQAvD_BwE"><u>here</u></a></h6>
                                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);