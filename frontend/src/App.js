import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './screens/HomePage'
import ProductPage from './screens/ProductPage'
import CartPage from './screens/CartPage'
import LoginPage from './screens/LoginPage'
import RegisterPage from './screens/RegisterPage'
import ProfilePage from './screens/ProfilePage'
import ShippingPage from './screens/ShippingPage'
import PaymentPage from './screens/PaymentPage'
import PlaceOrderPage from './screens/PlaceOrderPage'
import OrderPage from './screens/OrderPage'
import UserListPage from './screens/UserListPage'
import UserEditPage from './screens/UserEditPage'
import ProductListPage from './screens/ProductListPage'
import ProductEditPage from './screens/ProductEditPage'
import OrderListPage from './screens/OrderListPage'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderPage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/admin/userlist' component={UserListPage} />
          <Route path='/admin/user/:id/edit' component={UserEditPage} />
          <Route
            path='/admin/productlist'
            component={ProductListPage}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListPage}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditPage} />
          <Route path='/admin/orderlist' component={OrderListPage} />
          <Route path='/search/:keyword' component={HomePage} exact />
          <Route path='/page/:pageNumber' component={HomePage} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomePage}
            exact
          />
          <Route path='/' component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
