import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as paginateAction from "../redux/action/paginate"

class Paginate extends Component {

    nextPage = () => {
        var { page, size } = this.props.paginate
        this.props.setPaginate({
            page: page + 1,
            size
        })
        this.props.findByPageAndSize(page + 1, size);
    }

    previousPage = () => {
        var { page, size } = this.props.paginate
        if (page === 0) {
            return;
        }
        this.props.setPaginate({
            page: page - 1,
            size
        })
        this.props.findByPageAndSize(page - 1, size);
    }

    changeSizePerPage = (e) => {
        var { page } = this.props.paginate
        var size = e.target.value;
        console.log(size)
        this.props.setPaginate({
            page,
            size
        })
        this.props.findByPageAndSize(page, size);
    }

    render() {
        var {totalElement, totalElementActive} = this.props
        var { page, size } = this.props.paginate
        return (
            <tr>
                <td colSpan="7">
                    <div className="row">
                        <div className="col-lg-6">
                            <button
                                disabled={page === 0 ? true : false}
                                onClick={this.previousPage}
                                style={{ fontSize: "12px", fontWeight: "bold", background: "#E1E3E5", borderRadius: "2px" }}
                                className="btn btn-paginate">Previous</button>
                            <button style={{ fontSize: "12px", fontWeight: "bold", background: "#FFD333", borderRadius: "2px", margin: "0px 5px 0px 5px" }} className="btn btn-paginate">{this.props.paginate.page + 1}</button>
                            <button
                                onClick={this.nextPage}
                                style={{ fontSize: "12px", fontWeight: "bold", background: "#E1E3E5", borderRadius: "2px" }}
                                className="btn btn-paginate"

                            >Next</button>
                        </div>
                        <div className="col-lg-6 text-end">
                            <span>Showing {page*size + 1} to {page*size + totalElementActive} of {totalElement}</span>
                            <span> / </span>
                            <span>Rows per page </span>
                            <select className="btn cbo-page-size ms-3" onChange={this.changeSizePerPage}
                                style={{ fontSize: "12px", fontWeight: "bold", borderRadius: "2px" }}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                            </select>
                        </div>
                    </div>


                </td>
            </tr>
        )
    }
}


const mapStateToProps = state => {
    return {
        paginate: state.paginate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPaginate: paginate => {
            dispatch(paginateAction.setPaginate(paginate))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginate);
