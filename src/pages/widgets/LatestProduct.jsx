import React from 'react'

const ProductBox = () => {
    return (
        <div className="small_product_col col-6 col-sm-6">
            <div className="card">
                <img
                    className="card-img-top"
                    src="https://www.25karats.com/articles/wp-content/uploads/2015/07/wedding-rings1.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}

const WidgetLatestProduct = () => {

    return (
        <div>
            <div className="row">
                <div className="col">Produk Terkini</div>
                <div className="col text-right">Lihat Semua ></div>
            </div>
            <div style={{ padding: 8 }}>
                <div className="row">
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                </div>
            </div>
        </div>
    )
}

export default WidgetLatestProduct
