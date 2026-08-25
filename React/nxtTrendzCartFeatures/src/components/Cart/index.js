import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const showEmptyView = cartList.length === 0

      const onClickRemoveAllCarts = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />

          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>

                <button
                  type="button"
                  className="row-box"
                  onClick={onClickRemoveAllCarts}
                >
                  Remove All
                </button>

                <CartListView />

                <div className="cart-summary-container">
                  <h1>
                    Order Total:{' '}
                    <span>
                      {cartList.reduce(
                        (total, item) =>
                          total + item.price * item.quantity,
                        0,
                      )}
                    </span>
                  </h1>

                  <p>{cartList.length} Items in cart</p>

                  <button type="button">Checkout</button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart