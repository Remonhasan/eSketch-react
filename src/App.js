import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import AppRoute from './route/AppRoute'

export default function () {
  return (
    <Fragment>
      {/* For not having server side dependency we have used HashRouter */}
      <HashRouter>
        <AppRoute />
      </HashRouter>
    </Fragment>
  )
}

