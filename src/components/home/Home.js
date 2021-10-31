import {Component} from "react";
import Nvabar from "../nvabars/Nvabar";
import ShowCart from "../showCart/ShowCart";
import Carousel from "../carousel/Carousel";
import ProductType from "../productType/ProductType";
import GlobalSale from "../globalSale/GlobalSale";
import PopularProduct from "../popularProducts/PopularProduct";
import Brands from "../brand/Brands";
import Footer from "../footer/Footer";
import { Route } from "react-router";
import Login from "../login/Login"
class Home extends Component{
    render() {
        return(
            <>
                <Nvabar></Nvabar>
                <ShowCart></ShowCart>
                <Carousel></Carousel>
                <ProductType></ProductType>
                <GlobalSale></GlobalSale>
                <PopularProduct></PopularProduct>
                <Brands></Brands>
                <Footer></Footer>
                {/* <Route path="/login">
                    <Login/>
                </Route> */}
            </>
        )
    }
}
export default Home;