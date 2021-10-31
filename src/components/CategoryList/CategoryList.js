import React, { Component } from 'react'
import CategoryItem from '../categoryItem/CategoryItem'
import * as categoryAction from "../../redux/action/category"
import * as catalogAction from "../../redux/action/catalogAction"
import { connect } from 'react-redux'
import CategoryService from '../../service/categoryService'
import Paginate from "../paginate/Paginate"
import { Link } from 'react-router-dom'
import BreadCrumb from '../breadCrumb/BreadCrumb'
class CategoryList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            totalElement: 0,
            totalElementActive: 0,
            totalPage: 0
        }
    }

    // formatDate = (date) => {
    //     return date.substring(0, 10) + "T" + date.substring(11, 16)
    // }

    componentDidMount = () => {
        var { page, size } = this.props.paginate;
        this.findByPageAndSize(page, size)
    }

    findByPageAndSize = (page, size) => {
        CategoryService.getAll(page, size)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result))
                var { data, metadata } = JSON.parse(result);
                console.log(data)
                this.setState({
                    totalElement: metadata.total,
                    totalElementActive: data.length,
                    totalPage: metadata.page
                })
                this.props.setListCategory(data);
            })
            .catch(error => console.log('error', error));
    }

    addCategory = () => {
        this.props.setCatalogAction(0);
        this.props.setCategoryDetail({
            id: "-1",
            code: "",
            name: "",
            description: "",
            createdDate: "",
            updatedDate: ""
        })
    }

    render() {

        var { categories } = this.props
        var { totalElement, totalElementActive, totalPage } = this.state
        var elements = categories.map((categoryItem, ind) => {
            return <CategoryItem key={ind} categoryItem={categoryItem} />
        })

        var breadcrumb = ["Categories"]

        return (
            <div className="category-list">
                <BreadCrumb breadcrumb={breadcrumb} />
                <div className="catalog-header">
                    <div className="row">
                        <div className="col">
                            <h3>Categories</h3>
                        </div>
                        <div className="col">
                            <div className="add-group text-end">
                                <Link to="/categoryDetail" className="btn btn-add" onClick={this.addCategory}>New category</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog-table">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Desc</th>
                                <th>Created date</th>
                                <th>Updated date</th>
                                <th></th>
                            </tr>
                            {elements}
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
        categories: state.categories,
        paginate: state.paginate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setListCategory: categories => {
            dispatch(categoryAction.setListCategory(categories))
        },
        setCatalogAction: action => {
            dispatch(catalogAction.setCatalogAction(action))
        },
        setCategoryDetail: categoryDetail => {
            dispatch(categoryAction.setCategoryDetail(categoryDetail))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

