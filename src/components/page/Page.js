import { Component } from 'react';
import { connect } from "react-redux";
import Login from './Login';
import AdminPage from './AdminPage';
import "../css/main/main.css"
import { IsLogin } from '../context/IsLogin';

class Page extends Component {

    render() {
        let { isLogin } = this.context // use context
        // let { isLogin } = this.props // use redux
        return (
            <div>
                {
                    isLogin ? <AdminPage /> : <Login />
                }
            </div>
        );
    }
}

Page.contextType = IsLogin

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin
    }
}

const mapDispatchToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
