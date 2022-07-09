import React, { Fragment, Component } from 'react'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <FeaturedProducts/>
                <Categories/>
            </Fragment>
        )
    }
}
