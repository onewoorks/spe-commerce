import React from 'react'
import { Link } from 'react-router-dom'

const ProductBlock = (props) => {
    let product_data = props.product_data
    let blockLabel = ''
    switch(product_data.label){
        case 'new':
            blockLabel = 'block2-labelnew'
            break
        case 'sale':
            blockLabel = 'block2-labelsale'
            break
        default: 
            break
    }
    return (
        <div className="block2">
            <Link to='/product/98123'>
            <div className={`block2-img wrap-pic-w of-hidden pos-relative ${blockLabel}`}>
                <img src={product_data.image} alt={product_data.name} />

                <div className="block2-overlay trans-0-4">
                    <div
                        className="block2-btn-addwishlist hov-pointer trans-0-4"
                    >
                        <i
                            className="icon-wishlist icon_heart_alt"
                            aria-hidden="true"
                        ></i>
                        <i
                            className="icon-wishlist icon_heart dis-none"
                            aria-hidden="true"
                        ></i>
                    </div>

                    <div className="block2-btn-addcart w-size1 trans-0-4">
                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            </Link>

            <div className="block2-txt p-t-20">
                <a
                    href="product-detail.html"
                    className="block2-name dis-block s-text3 p-b-5"
                >
                    {product_data.name}
                </a>

                <span className="block2-price m-text6 p-r-5">{product_data.price}</span>
            </div>
        </div>
    )
}

export default ProductBlock
