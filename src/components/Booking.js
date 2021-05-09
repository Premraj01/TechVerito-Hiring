/** @format */

import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const Booking = ({ history }) => {
  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedShow, setSelectedShow] = useState('')
  const [subTotal, setSubTotal] = useState(0)
  let revenue = []

  let seats = JSON.parse(localStorage.getItem('selectedSeats'))
  const show = localStorage.getItem('selectedShow')

  useEffect(() => {
    setSelectedSeats(seats)
    setSelectedShow(show)
    setSubTotal(selectedSeats.length * 120)
  }, [selectedShow, subTotal])

  const revenueHandler = () => {
    revenue = JSON.parse(localStorage.getItem('revenueArray'))

    if (revenue) {
      revenue = [subTotal, ...revenue]
      console.log(revenue)
      localStorage.setItem('revenueArray', JSON.stringify(revenue))
      alert('Successfully booked the show')
      history.push('/')
    }
  }

  return (
    <>
      <div>
        <hr />
        <h4>Successfully booked:&nbsp;{selectedShow}</h4>
        <h4>
          Seats:{' '}
          {seats.map((s) => (
            <> {s}</>
          ))}
        </h4>

        <h4>Subtotal:&nbsp;{subTotal}</h4>
        <h4>Service Tax @14%:&nbsp;{((subTotal * 14) / 100).toFixed(2)}</h4>
        <h4>
          Swach Bharat cess @0.5%:&nbsp;{((subTotal * 0.5) / 100).toFixed(2)}
        </h4>
        <h4>
          krishi kalyan cess @0.5%:&nbsp;{((subTotal * 0.5) / 100).toFixed(2)}
        </h4>
        <h4>
          Total:&nbsp;
          {(
            subTotal +
            (subTotal * 14) / 100 +
            (subTotal * 0.5) / 100 +
            (subTotal * 0.5) / 100
          ).toFixed(2)}{' '}
        </h4>
      </div>
      <Button onClick={revenueHandler}>Confirm</Button>
      <hr />
    </>
  )
}

export default Booking
