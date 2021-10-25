class LoginService {

    login = (username, password) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        return fetch("http://localhost:8080/login?un=" + username + "&pw=" + password, requestOptions);
    }
}

export default new LoginService();