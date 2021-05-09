/** @format */

import React, { useEffect, useState, Fragment } from 'react'
import moviesData from '../data/data.js'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookShow = () => {
  //Show

  const [data, setData] = useState([])
  const [show, setShow] = useState('Show1')

  const [seats, setSeats] = useState([])
  const [seatsDisabled, setSeatsDisabled] = useState(false)

  const selectSeatHandler = (seat) => {
    setSeats(
      seats.includes(seat) ? seats.filter((s) => s !== seat) : [...seats, seat]
    )
  }

  const selectedSeats = localStorage.getItem('selectedSeats')

  useEffect(() => {
    setData(moviesData)
  }, [data, show, seats])

  const showHandler = (show) => {
    while (seats.length > 0) {
      seats.pop()
    }
    console.log(seats)
    setShow(show)
    console.log(show)
  }

  //Seats

  const q = window.location.href

  useEffect(() => {
    if (q.includes('booking')) {
      setSeatsDisabled(true)
    } else {
      setSeatsDisabled(false)
    }
  }, [seatsDisabled, q, seats])

  const storeData = () => {
    localStorage.setItem('selectedSeats', JSON.stringify(seats))
    localStorage.setItem('selectedShow', show)
  }

  return (
    <Container>
      <h2>Book Tickets</h2>
      <hr />
      <Row>
        <Col md={1} xs={1}>
          <h4>Shows</h4>
        </Col>
        <Col md={11} xs={11}>
          <Form.Group>
            {data.map((sh, i) => (
              <Fragment key={i}>
                <Form.Check
                  type={'radio'}
                  label={sh.showName}
                  value={sh.showName}
                  checked={show === sh.showName}
                  onChange={() => showHandler(sh.showName)}
                  inline></Form.Check>
              </Fragment>
            ))}
          </Form.Group>
        </Col>
      </Row>
      <div>
        {data
          .filter((s) => s.showName === show)
          .map((eachShow, i) => (
            <div key={i}>
              {eachShow.seats.map((s, i) => (
                <Fragment key={i}>
                  <Button
                    varient='secondary'
                    onClick={() => selectSeatHandler(s)}
                    disabled={
                      selectedSeats <= 0 ? false : selectedSeats.includes(s)
                    }>
                    {s}
                  </Button>
                </Fragment>
              ))}
            </div>
          ))}
        <div>
          <h4>selected Seats:</h4>
          <Row>
            {seats.map((s, i) => (
              <div key={i}>
                <Col>
                  {' '}
                  <div>{s}</div>{' '}
                </Col>
              </div>
            ))}
            <Col>
              {seats.length <= 0 ? (
                <Link to='/'>
                  <Button disabled={true}> Bill</Button>
                </Link>
              ) : (
                <>
                  <Link to='/booking'>
                    <Button onClick={storeData}> Bill</Button>
                  </Link>
                </>
              )}
            </Col>
          </Row>
          <hr />
        </div>
      </div>
    </Container>
  )
}

export default BookShow
