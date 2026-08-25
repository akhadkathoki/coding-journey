import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  addCartItem = product => {
    this.setState(prevState => {
      const existingProduct = prevState.cartList.find(
        item => item.id === product.id,
      )

      if (existingProduct) {
        return {
          cartList: prevState.cartList.map(item => {
            if (item.id === product.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              }
            }

            return item
          }),
        }
      }

      return {
        cartList: [
          ...prevState.cartList,
          {
            ...product,
            quantity: 1,
          },
        ],
      }
    })
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }

        return item
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const item = this.state.cartList.find(item => item.id === id)

    if (item.quantity <= 1) {
      this.removeCartItem(id)
      return
    }

    this.setState(prevState => ({
      cartList: prevState.cartList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        }

        return item
      }),
    }))
  }

  removeCartItem = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(item => item.id !== id),
    }))
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />

          <ProtectedRoute exact path="/" component={Home} />

          <ProtectedRoute exact path="/products" component={Products} />

          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />

          <ProtectedRoute exact path="/cart" component={Cart} />

          <Route path="/not-found" component={NotFound} />

          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App