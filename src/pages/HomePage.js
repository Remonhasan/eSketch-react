import axios from 'axios'
import React, { Fragment, Component } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'
import ApiURL from '../api/ApiURL'

export default class HomePage extends Component {

    componentDidMount (){
        window.scroll(0,0);
        this.GetVisitorDetails();
    }

    // Catch VisitorDetails api infos
    GetVisitorDetails = ()=>{
        axios.get(ApiURL.VisitorDetails).then().catch();
    }

    render() {
        return (
            <Fragment>
                <NavMenuDesktop/>
                <HomeTop/>
                <NewArrival/>
                <FeaturedProducts/>
                <Collection/>
                <Categories/>
                <FooterDesktop/>
            </Fragment>
        )
    }
}
