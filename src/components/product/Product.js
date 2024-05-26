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
        <div className='container product --flex-center --dir-column'>
          <div className='product-image --text-center --card --mr'>
            <img src={gown} alt='wedding dress'/>
          </div>

          <div className='product-description'>
            <h3 className='--text-md --color-danger'>Sleek Wedding Gown</h3>
            <p className='--fw-bold'>$95 USD</p>
            <p className='--text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <form>
              <div className='--form-control --flex-start --my2'>
                <label>Color</label>
                <select>
                  <option>Choose an option</option>
                  <option>White</option>
                </select>
              </div>

              <div className='--form-control --flex-start --my2'>
                <label>Size</label>
                <select>
                  <option>Choose an option</option>
                  <option>25</option>
                  <option>27</option>
                </select>
              </div>

              <div className='--form-control --flex-start --my2'>
                <label>Quantity</label>
                <select>
                  <option>Choose an option</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>

              <button className='--btn --btn-primary --btn-block'>Add to cart</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
