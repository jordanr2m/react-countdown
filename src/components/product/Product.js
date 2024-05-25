import React from 'react'
import "./Product.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import gown from "../../assets/gown1.jpg"

const Product = () => {
  return (
    // Place everything inside of a fragment
    <>
      <header className='--bg-dark'>
        <nav className='container'>
          {/* Place icon inside of h2 */}
          <h2 className='--text-md --text-light --py2'>
            Zulu<span>Shop</span>
            <AiOutlineShoppingCart color="orangered" size={30} className='shopping-icon' />
          </h2>
        </nav>
      </header>

      <section>
        <div className='container product --flex-center --flex-dr-column'>
          <div className='product-image --text-center --card --mr'>
            <img src={gown} alt='wedding dress'/>
          </div>

          <div className='product-description'>

          </div>
        </div>
      </section>
    </>
  )
}

export default Product
