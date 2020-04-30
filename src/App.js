import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
 import { connect } from 'react-redux'

import CommonHeader from './pages/common/Header.jsx'
import CommonFooter from './pages/common/Footer.jsx'
import Homepage from './pages/Homepage.js'
import ProductCategory from './pages/products/Category.jsx'
import ProductProduct from './pages/products/Product.jsx'

const App = (props) => {
  return (
    <Router>
      <CommonHeader breadcrumb={props.breadcrumb} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/catalog/:catalog_slug?' component={ProductCategory} />
        <Route path='/product/:product_id?' component={ProductProduct} />
      </Switch>
      <CommonFooter /> 
    </Router>
  );
}


const mapStateToProps = state => {
  return ({
    breadcrumb: state.globalReducer.breadcrumbs
  })
  }

export default connect(mapStateToProps)(App);