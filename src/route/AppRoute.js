import React, { Component, Fragment } from 'react'
import { Route, Routes } from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import UserOnboardPage from '../pages/UserOnboardPage';

export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        {/* Routes is used instead of Switch  */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/onboard" element={<UserOnboardPage />} />
          <Route exact path="/productDetails" element={<ProductDetailsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </Fragment>
    )
  }
}
