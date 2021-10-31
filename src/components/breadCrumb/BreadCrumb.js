import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BreadCrumb extends Component {

    render() {
        var breadcrumb = this.props.breadcrumb.map((val, ind) => {
            return <span key={ind}>
                <span><Link to={"/" + val} className="breadcrumb-item">{val}</Link></span>
                <span className="breadcrumb-space">/</span>
            </span>
        })

        return (
            <div>
                <p className="breadcrumb">{breadcrumb}</p>
            </div>
        )
    }
}
