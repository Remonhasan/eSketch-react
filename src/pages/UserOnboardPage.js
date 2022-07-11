import React, { Fragment, Component } from 'react'
import { Row, Col, Card, Container, Navbar, Button } from 'react-bootstrap'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import UserOnboard from '../components/common/UserOnboard'


export default class UserOnboardPage extends Component {
  render() {
    return (
        <Fragment>
         <NavMenuDesktop/>
         <UserOnboard/>
         <FooterDesktop/>
        </Fragment>
      )
  }
}
