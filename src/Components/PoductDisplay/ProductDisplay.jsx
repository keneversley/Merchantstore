import React from 'react'
import './ProductDisplay.css'

export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">

            </div>

        </div>
        <div className="productdisplay-right">
            <img className='' src={product.image} alt="" />
        </div>


    </div>
  )
}

export default ProductDisplay