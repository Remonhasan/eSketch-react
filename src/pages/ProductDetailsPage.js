import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SuggestedProducts from '../components/ProductDetails/SuggestedProducts'

export default class ProductDetailsPage extends Component {

    // window scroll top always
    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <ProductDetails />
                <SuggestedProducts />
                <FooterDesktop />
            </Fragment>
        )
    }
}
