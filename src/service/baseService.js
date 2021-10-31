import { BASE_URL } from "../constant/const"

class BaseService {

    constructor() {
        this.catalogUrl = ""
    }

    getNow = () => {
        var date = new Date();
        var now = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        return now;
    }

    getAll = (page, size) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        return fetch(BASE_URL + this.catalogUrl + "?p=" + page + "&s=" + size, requestOptions)
    }

    getById = (id) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch(BASE_URL + this.catalogUrl + "/" + id, requestOptions)
    }

    create = (data) => {
        var jwtToken = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + jwtToken);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=060BC7AD89B9E9AA1748EFD28B603FB6");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch(BASE_URL + this.catalogUrl, requestOptions)
    }

    update = (data) => {
        var jwtToken = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + jwtToken);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=060BC7AD89B9E9AA1748EFD28B603FB6");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch(BASE_URL + this.catalogUrl, requestOptions)
    }

    delete = (id) => {
        var token = localStorage.getItem("token")
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch(BASE_URL + this.catalogUrl + "/" + id, requestOptions)
    }

}

export default BaseService;