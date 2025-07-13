import React from 'react'
import './Title.css'

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
    <p>{subTitle}</p>
    {/* <h2>Check this out!</h2> */}
    </div>
  )
}

export default Title