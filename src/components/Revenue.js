/** @format */

import React from 'react'

const Revenue = () => {
  const revenue = JSON.parse(localStorage.getItem('revenueArray'))

  return (
    <div>
      <h4>
        {' '}
        Total Revenue: {revenue.reduce((acc, item) => acc + item, 0).toFixed(2)}
      </h4>
      <h4>
        {' '}
        Total Service Tax:{' '}
        {revenue.reduce((acc, item) => acc + (item * 14) / 100, 0).toFixed(2)}
      </h4>
      <h4>
        {' '}
        Swachha bharat Cess:{' '}
        {revenue.reduce((acc, item) => acc + (item * 0.5) / 100, 0).toFixed(2)}
      </h4>
      <h4>
        {' '}
        Total Krishi Cess:{' '}
        {revenue.reduce((acc, item) => acc + (item * 0.5) / 100, 0).toFixed(2)}
      </h4>
      <hr />
    </div>
  )
}

export default Revenue
