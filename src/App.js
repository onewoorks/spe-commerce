import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// import CommonHeader from './pages/common/Header.jsx'
import Header from './components/Header.jsx'
import Homepage from './pages/Homepage.js'
import ProductCategory from './pages/products/Category.jsx'
import ProductProduct from './pages/products/Product.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'
import Product from './pages/Product.jsx'
import Footer from './components/Footer.jsx'

const App = (props) => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route
                        path="/catalog/:catalog_slug?"
                        component={ProductCategory}
                    />
                    <Route
                        path="/productx/:product_id?"
                        component={ProductProduct}
                    />
                    <Route path="/contact" component={Contact} />
                    <Route path="/products" component={Products} />
                    <Route path="/product/:tag?" component={Product} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        breadcrumb: state.globalReducer.breadcrumbs,
    }
}

export default connect(mapStateToProps)(App)
