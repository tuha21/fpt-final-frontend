import {Component} from "react";

export default class ProductType extends Component{
    render() {
        return(
            <div className="top_catagory_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-12 col-sm-6 col-md-4">
                            <div
                                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                                style={{backgroundImage: 'url(assets/img/bg-img/bg-2.jpg)'}}>
                                <div className="catagory-content">
                                    <a href="#">Clothing</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div
                                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                                style={{backgroundImage: 'url(assets/img/bg-img/bg-3.jpg)'}}>
                                <div className="catagory-content">
                                    <a href="#">Shoes</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div
                                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                                style={{backgroundImage: 'url(assets/img/bg-img/bg-4.jpg)'}}>
                                <div className="catagory-content">
                                    <a href="#">Accessories</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}