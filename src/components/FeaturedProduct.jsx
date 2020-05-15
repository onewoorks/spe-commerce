import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import ProductBlock from './ProductBlock.jsx'

const FeaturedProduct = (props) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    }

    const ProductSliders = (props) => {
        let items = []
        let i = 0
        do {
            items.push(
                <div className="item-slick2 p-l-15 p-r-15">
                    <ProductBlock
                        product_data={{
                            image: 'images/item-05.jpg',
                            name: 'Denim jacket blue 2',
                            price: '$92.50',
                            label: 'sale',
                        }}
                    />
                </div>
            )
            i++
        } while (i < 10)
        return <Slider {...settings}>{items}</Slider>
    }
    return (
        <section className="newproduct bgwhite p-t-45 p-b-105">
            <div className="container">
                <div className="sec-title p-b-60">
                    <h3 className="m-text5 t-center">Featured Products</h3>
                </div>

                <ProductSliders />
            </div>
        </section>
    )
}

export default FeaturedProduct
