/** @format */

import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  let revenue = JSON.parse(localStorage.getItem('revenueArray'))
  if (!revenue) {
    localStorage.setItem('revenueArray', JSON.stringify([]))
  }

  return (
    <>
      <Row>
        <Col md={2}>
          <Link to='/bookshow'>
            <Button>Book Ticket</Button>
          </Link>{' '}
        </Col>
        <Col md={10}>
          <Link to='/revenue'>
            <Button>Revenue</Button>
          </Link>{' '}
        </Col>
      </Row>
      <hr />
    </>
  )
}

export default HomeScreen
