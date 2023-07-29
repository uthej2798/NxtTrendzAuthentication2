import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
      alt="cart"
    />
  )
}

export default Cart
