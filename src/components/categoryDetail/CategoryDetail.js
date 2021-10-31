import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as categoryAction from "../../redux/action/category"
import { Link } from "react-router-dom"
import CategoryService from "../../service/categoryService"
import ProductService from '../../service/productService'
import Paginate from "../paginate/Paginate"
import BreadCrumb from '../breadCrumb/BreadCrumb'
class CategoryDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            note: {
                active: false,
                message: "",
                status: true
            },
            listProduct: [],
            totalElement: 0,
            totalElementActive: 0,
            totalPage: 0
        }
    }

    componentDidMount = () => {
        this.findByPageAndSize(0,5);
    }


    findByPageAndSize = (page, size) => {
        var { categoryDetail } = this.props
        ProductService.getByCategory(categoryDetail.id, page, size)
            .then(response => response.text())
            .then(result => {
                var { data, metadata } = JSON.parse(result);
                this.setState({
                    listProduct: data,
                    totalElement: metadata.total,
                    totalElementActive: data.length,
                    totalPage: metadata.page,
                })
            })
            .catch(error => console.log('error', error));
    }

    onChange = (e) => {
        var { categoryDetail } = this.props
        var { name, value } = e.target;
        this.props.setCategoryDetail({
            ...categoryDetail,
            [name]: value
        })
        this.setState({
            note: {
                active: false,
                message: "",
                status: true
            }
        })
    }

    changeDate = (e) => {
        this.setState({
            note: {
                active: true,
                message: "Can't change create and update date!",
                status: false
            }
        })
    }

    save = () => {
        if (this.validate()) {
            var now = CategoryService.getNow()
            var { categoryDetail, catalogAction } = this.props
            categoryDetail.updatedDate = now;
            if (catalogAction === 0) {
                categoryDetail.createdDate = now;
                this.createCategory(categoryDetail);
            }
            else {
                this.updateCategory(categoryDetail)
            }
        }
    }

    createCategory = (categoryDetail) => {
        CategoryService.create(categoryDetail)
            .then(response => {
                if (response.ok) {
                    return response.text()
                }
                throw new Error(response.status)
            })
            .then(result => {
                this.setState({
                    note: {
                        active: true,
                        message: "Create successfull!",
                        status: true
                    }
                })
            })
            .catch(error => {
                if (error === 403) {
                    this.setState({
                        note: {
                            active: true,
                            message: "Not allow!",
                            status: false
                        }
                    })
                }
            });
    }

    updateCategory = (categoryDetail) => {
        CategoryService.update(categoryDetail)
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.text()
                }
                throw response.status
            })
            .then(result => {
                this.setState({
                    note: {
                        active: true,
                        message: "Update successfull!",
                        status: true
                    }
                })
            })
            .catch(error => {
                if (error === 403) {
                    this.setState({
                        note: {
                            active: true,
                            message: "Not allow!",
                            status: false
                        }
                    })
                }
            });
    }

    validate = () => {
        var { categoryDetail } = this.props
        if (categoryDetail.code === "") {
            this.setState({
                note: {
                    active: true,
                    message: "Code is required!",
                    status: false
                }
            })
            return false;
        }
        if (categoryDetail.name === "") {
            this.setState({
                note: {
                    active: true,
                    message: "Name is required!",
                    status: false
                }
            })
            return false;
        }
        if (categoryDetail.description === "") {
            this.setState({
                note: {
                    active: true,
                    message: "Description is required!",
                    status: false
                }
            })
            return false;
        }
        return true
    }

    render() {
        var breadcrumb = ["Categories", "CategoryDetail"]
        var { categoryDetail, catalogAction } = this.props
        var { note, listProduct } = this.state
        var { totalElement, totalElementActive, totalPage } = this.state
        var noteElement = note.active ?
            <div
                className={note.status ? "alert alert-dismissible fade show mt-4 alert-primary" : "alert alert-dismissible fade show mt-4 alert-danger"} role="alert">
                <strong>Note:</strong> {note.message}
            </div> : ""

        var listProductElement = listProduct.map((val, ind) => {
            return <tr key={ind}>
                <td>{val.name}</td>
                <td>{val.price}</td>
            </tr>
        })

        return (
            <div className="category-detail">
                <BreadCrumb breadcrumb={breadcrumb}/>
                <div className="catalog-header">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col">
                                <h3>{catalogAction === 0 ? "Create category" : "Edit Category"}</h3>
                            </div>
                            <div className="col">
                                <div className="add-group text-end">
                                    <Link to="/categories"><button className="btn btn-back">Back to list</button></Link>
                                    <button onClick={this.save} className="btn btn-add">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog-detail-body">
                    <div className="container-fluid p-0">
                        <form className="category-detail-form">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="left-form">
                                        <h5 className="mb-4">Information</h5>
                                        <div className="mb-3">
                                            <h6>Id: {categoryDetail.id}</h6>
                                        </div>
                                        <div className="mb-3">
                                            <h6>Code</h6>
                                            <input className="form-control" placeholder="Enter category code"
                                                name="code"
                                                onChange={this.onChange} value={categoryDetail.code}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <h6>Name</h6>
                                            <input className="form-control" placeholder="Enter category name"
                                                name="name"
                                                onChange={this.onChange} value={categoryDetail.name}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <h6>Description</h6>
                                            <textarea className="form-control"
                                                name="description"
                                                onChange={this.onChange} value={categoryDetail.description}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="date-information">
                                        <h5 className="mb-4">Date infomation</h5>
                                        <div className="mb-3">
                                            <h6>Created date</h6>
                                            <input className="form-control"
                                                onChange={this.changeDate} value={categoryDetail.createdDate}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <h6>Updated date</h6>
                                            <input className="form-control"
                                                onChange={this.changeDate} value={categoryDetail.updatedDate}
                                            />
                                        </div>
                                    </div>
                                    {noteElement}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="list-prod-by-cate mt-4">
                    <h5 className="mb-4">{categoryDetail.name} products</h5>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                            </tr>
                            {listProductElement}
                            <Paginate
                                findByPageAndSize={this.findByPageAndSize}
                                totalElement={totalElement}
                                totalElementActive={totalElementActive}
                                totalPage={totalPage}
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categoryDetail: state.categoryDetail,
        catalogAction: state.catalogAction
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCategoryDetail: categoryDetail => {
            dispatch(categoryAction.setCategoryDetail(categoryDetail))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
