import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as categoryAction from "../redux/action/category"
import * as catalogAction from "../redux/action/catalogAction"

class CategoryItem extends Component {

    setCategoryDetail = () => {
        var { categoryItem } = this.props
        this.props.setCategoryDetail(categoryItem)
        this.props.setCatalogAction(1)
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
                <td><Link to="/categoryDetail"><button type="button" className="btn btn-light" onClick={this.setCategoryDetail}><i className="bi bi-three-dots-vertical"></i></button></Link></td>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
