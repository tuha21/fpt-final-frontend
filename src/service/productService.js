import BaseService from "./baseService";

class ProductService extends BaseService {

    constructor() {
        super();
        this.catalogUrl = "/admin/products"
    }

    getByCategory = (cId, page, size) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch("http://localhost:8080/admin/products/findByCategory?cid=" + cId + "&p="+page+"&s=" + size, requestOptions)
    }

}

export default new ProductService();