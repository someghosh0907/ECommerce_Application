import React from 'react'
import './card.css'
import { FaStar } from 'react-icons/fa'

const Card = (props) => {
  return (
  <div className='topg'>
    <div className='card-main'>
      <div className='images'><img src={props.image} alt='img' style={{width:"300px",height:"180px",marginRight:"50px"}}></img></div>
      <div className='brand-category-pricing' style={{marginTop:"40px"}}>
        <div className='brand&category'>{props.brand}-{props.category}</div>
        <div className='pricing'><b> ₹ {props.price}</b></div>
      </div>
      <div className='stock-rating-discount'>
        <div className='rating'><FaStar style={{color:"orange"}}/><FaStar style={{color:"orange"}}/><FaStar style={{color:"orange"}}/><FaStar style={{color:"orange"}}/></div>
        <div className='discount'>{props.discount}% OFF</div>
      </div>
    </div>
    </div>
  )
}

export default Card
//<div className='stock'>Stock: {props.stock}</div>