import React from 'react'
import "./Product.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Product = () => {
  return (
    // Place everything inside of a fragment
    <>
      <header className='--bg-dark'>
        <nav className='container'>
          {/* Place icon inside of h2 */}
          <h2 className='--text-md --text-light --py2'>
            Zulu<span>Shop</span>
            <AiOutlineShoppingCart color="orangered" size={30} className='shopping-icon'/>
          </h2>
        </nav>
      </header>

      <section>
        
      </section>
    </>
  )
}

export default Product
