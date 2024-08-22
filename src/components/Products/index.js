// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'

const Products = () => {
  const jwtTokens = Cookies.get('jwt_token')
  if (jwtTokens === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="cart">
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="cart-img"
        />
      </div>
    </div>
  )
}

export default Products
