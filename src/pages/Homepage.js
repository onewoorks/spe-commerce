import React from 'react'

import ProductCategory from './products/Category.jsx'

const Homepage = (props) => {
    return (
        <div>
            <div className="jumbotron">
                <h1>SPE E COMMERCE</h1>
                <div className="lead">
                    This is landing page for kedai emas .....
                </div>
                <hr className="my-4" />
                <p>Selamat hari raya</p>
                <div className="btn btn-primary btn-lg">Learn More</div>
            </div>

            <div className="container">
            <ProductCategory />
            </div>
            
        </div>
    )
}

export default Homepage
