import React from 'react'

const Investors = ({investorLogo, logoSize}) => {
  return (
    <div className='investor-logo-container'>
        <img src={investorLogo} height={`${logoSize}px`}></img>
    </div>
  )
}

export default Investors