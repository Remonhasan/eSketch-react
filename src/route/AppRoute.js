import React, { Component, Fragment } from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';

export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        {/* Routes is used instead of Switch  */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Fragment>
    )
  }
}
