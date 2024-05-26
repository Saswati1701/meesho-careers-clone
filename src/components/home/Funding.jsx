import React from 'react'

const Funding = ({series, date, amount}) => {
  return (
    <div className='funding'>
        <p>Series {series}</p>
        <p>{date}</p>
        <p>USD {amount}M</p>
    </div>
  )
}

export default Funding