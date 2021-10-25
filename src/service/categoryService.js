import BaseService from "./baseService";

class CategoryService extends BaseService{

    constructor () {
        super()
        this.catalogUrl = "/admin/categories"
    }

}

export default new CategoryService();