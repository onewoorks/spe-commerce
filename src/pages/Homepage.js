import React from 'react'

import WidgetHargaEmas from './widgets/HargaEmas.jsx'
import WidgetCarian from './widgets/Carian.jsx'
import WidgetLatestProduct from './widgets/LatestProduct.jsx'
import WidgetKategori from './widgets/Kategori.jsx'

const Homepage = (props) => {
    return (
        <div>
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
                            alt=""
                            className="d-block w-100"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg"
                            alt=""
                            className="d-block w-100"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
                            alt=""
                            className="d-block w-100"
                        />
                    </div>
                </div>
            </div>

            <br />

            <div className="container">
                <WidgetHargaEmas />
                <WidgetCarian />
                <WidgetKategori />
                <WidgetLatestProduct />
            </div>
        </div>
    )
}

export default Homepage
