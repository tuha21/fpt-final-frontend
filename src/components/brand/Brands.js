import {Component} from "react";

export default class Brands extends Component{
    render() {
        return(
            <div className="brands-area d-flex align-items-center justify-content-between">

                <div className="single-brands-logo">
                    <img src="assets/img/core-img/brand1.png" alt=""/>
                </div>

                <div className="single-brands-logo">
                    <img src="assets/img/core-img/brand2.png" alt=""/>
                </div>

                <div className="single-brands-logo">
                    <img src="assets/img/core-img/brand3.png" alt=""/>
                </div>

                <div className="single-brands-logo">
                    <img src="assets/img/core-img/brand4.png" alt=""/>
                </div>

                <div className="single-brands-logo">
                    <img src="assets/img/core-img/brand5.png" alt=""/>
                </div>

                <div className="single-brands-logo">
                    <img src="assets/img/core-img/brand6.png" alt=""/>
                </div>
            </div>

        )
    }
}