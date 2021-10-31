import {Component} from "react";

export default class PopularProduct extends Component{
    render() {
        return(
            <section className="new_arrivals_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <h2>Popular Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="popular-products-slides owl-carousel">

                                <div className="single-product-wrapper">

                                    <div className="product-img">
                                        <img src="assets/img/product-img/product-1.jpg" alt=""/>

                                        <img className="hover-img" src="assets/img/product-img/product-2.jpg"
                                             alt=""/>

                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>

                                    <div className="product-description">
                                        <span>topshop</span>
                                        <a href="#">
                                            <h6>Knot Front Mini Dress</h6>
                                        </a>
                                        <p className="product-price">$80.00</p>

                                        <div className="hover-content">

                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn rich-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-product-wrapper">

                                    <div className="product-img">
                                        <img src="assets/img/product-img/product-2.jpg" alt=""/>

                                        <img className="hover-img" src="assets/img/product-img/product-3.jpg"
                                             alt=""/>

                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>

                                    <div className="product-description">
                                        <span>topshop</span>
                                        <a href="#">
                                            <h6>Poplin Displaced Wrap Dress</h6>
                                        </a>
                                        <p className="product-price">$80.00</p>

                                        <div className="hover-content">

                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn rich-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-product-wrapper">

                                    <div className="product-img">
                                        <img src="assets/img/product-img/product-3.jpg" alt=""/>

                                        <img className="hover-img" src="assets/img/product-img/product-4.jpg"
                                             alt=""/>

                                        <div className="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div>

                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>

                                    <div className="product-description">
                                        <span>mango</span>
                                        <a href="#">
                                            <h6>PETITE Crepe Wrap Mini Dress</h6>
                                        </a>
                                        <p className="product-price"><span
                                            className="old-price">$75.00</span> $55.00</p>

                                        <div className="hover-content">

                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn rich-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-product-wrapper">

                                    <div className="product-img">
                                        <img src="assets/img/product-img/product-4.jpg" alt=""/>

                                        <img className="hover-img" src="assets/img/product-img/product-5.jpg"
                                             alt=""/>

                                        <div className="product-badge new-badge">
                                            <span>New</span>
                                        </div>

                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>

                                    <div className="product-description">
                                        <span>mango</span>
                                        <a href="#">
                                            <h6>PETITE Belted Jumper Dress</h6>
                                        </a>
                                        <p className="product-price">$80.00</p>

                                        <div className="hover-content">
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn rich-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}