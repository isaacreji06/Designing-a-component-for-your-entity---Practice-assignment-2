// write product card here
import React from 'react'
import Button from './button'
import photo from '../assets/circketBat.jpg'

function Productcard() {
    const product={
        productName:"Cricket Bat and Ball",
        price:100,
    }
  return (
    <div style={{width:150,background:'white'}}>
        <img src={photo} style={{width:150}}/>
        <div style={{color:'black'}}>
        {product.productName}
        </div>
        <div style={{color:'black'}}>
        {product.price}$
        </div>
        <Button />
    </div>
  )
}

export default Productcard