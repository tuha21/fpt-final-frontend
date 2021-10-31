import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as categoryAction from "../../redux/action/category"
import * as catalogAction from "../../redux/action/catalogAction"
import CategoryService from "../../service/categoryService"
class CategoryItem extends Component {

    setCategoryDetail = () => {
        var { categoryItem } = this.props
        this.props.setCategoryDetail(categoryItem)
        this.props.setCatalogAction(1)
    }

    deleteCategory = () => {
        var { categoryItem } = this.props
        console.log(categoryItem)
        if (window.confirm("Delete this category ?")) {
            CategoryService.delete(categoryItem.id)
                .then(response => {
                    if(response.ok) {
                        return response.text()
                    }
                    else throw new Error(response.status)
                })
                .then(result => {
                    this.props.deleteCategory(this.props.categoryItem.id)
                    alert("Delete successfull")
                })
                .catch(error => {
                    if(error === 404) {
                        alert("Can't found category!" )
                    }
                });

        }
        else return
    }

    render() {

        var { categoryItem } = this.props

        return (
            <tr>
                <td>{categoryItem.id}</td>
                <td>{categoryItem.code}</td>
                <td>{categoryItem.name}</td>
                <td>{categoryItem.description}</td>
                <td>{categoryItem.createdDate}</td>
                <td>{categoryItem.updatedDate}</td>
                <td className="text-center">
                    <Link to="/categoryDetail" style={{ color: "black" }}><i className="bi bi-three-dots-vertical btn-item-action" onClick={this.setCategoryDetail}></i></Link>
                    <i onClick={this.deleteCategory} className="far fa-trash-alt ms-3 btn-item-action"></i>
                </td>
            </tr>
        )
    }
}
const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCategoryDetail: category => {
            dispatch(categoryAction.setCategoryDetail(category))
        },
        setCatalogAction: action => {
            dispatch(catalogAction.setCatalogAction(action))
        },
        deleteCategory: id => {
            dispatch(categoryAction.deleteCategory(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
