// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const Cart = () => {
  const jwtTokens = Cookies.get('jwt_token')
  if (jwtTokens === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="cart">
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </div>
  )
}

export default Cart
