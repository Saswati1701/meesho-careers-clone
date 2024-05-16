import React from 'react'

const Investors = ({investorLogo}) => {
  return (
    <div className='investor-logo-container'>
        <img src={investorLogo} height="80px"></img>
    </div>
  )
}

export default Investors