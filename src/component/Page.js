import { Component } from 'react';
import { connect } from "react-redux";
import Login from './Login';
import AdminPage from './AdminPage';
import "../css/main/main.css"
import { IsLogin, IsLoginProvider } from '../context/IsLogin';


class Page extends Component {

    render() {
        let { isLogin } = this.context
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
        
    }
}

const mapDispatchToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
