/** @format */

import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './components/HomeScreen'
import Revenue from './components/Revenue'
import BookShow from './components/BookShow'
import Booking from './components/Booking'

const App = () => {
  return (
    <Container>
      <Router>
        <Route path='/' component={HomeScreen} />
        <Route path='/bookshow' component={BookShow} />
        <Route path='/booking' component={Booking} />
        <Route path='/revenue' component={Revenue} />
      </Router>
    </Container>
  )
}

export default App
