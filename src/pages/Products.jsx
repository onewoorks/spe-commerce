import React from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Categories from '../components/Categories.jsx'
import Filters from '../components/Filters.jsx'
import FilterTop from '../components/FilterTop.jsx'
import ProductBlock from '../components/ProductBlock.jsx'

const Products = (props) => {
    const list_products = () => {
        let items = [
            {
                image: 'images/item-05.jpg',
                name: 'Denim jacket blue',
                price: '$92.50',
                label: 'new'
            },
            {
                image: 'images/item-05.jpg',
                name: 'Denim jacket blue 2',
                price: '$92.50',
                label: 'sale'
            },
            {
                image: 'images/item-05.jpg',
                name: 'Denim jacket blue 2',
                price: '$92.50',
                label: ''
            },
            {
                image: 'images/item-05.jpg',
                name: 'Denim jacket blue',
                price: '$92.50',
                label: 'new'
            },
            {
                image: 'images/item-05.jpg',
                name: 'Denim jacket blue 2',
                price: '$92.50',
                label: 'sale'
            },
            {
                image: 'images/item-05.jpg',
                name: 'Denim jacket blue 2',
                price: '$92.50',
                label: ''
            }
        ]
        let display_block = []

      items.map((x, index) => {
            display_block.push(
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    <ProductBlock key={index} product_data={x} />
                </div>
            )
            return true
        })
        return display_block
    }

    const Content = () => {
        return (
            <section className="bgwhite p-t-55 p-b-65">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                            <div className="leftbar p-r-20 p-r-0-sm">
                                <Categories />
                                <Filters />
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                            <FilterTop />

                            <div className="row">
                                {list_products()}

                            </div>

                            <div className="pagination flex-m flex-w p-t-26">
                                <div
                                    className="item-pagination flex-c-m trans-0-4 active-pagination"
                                >
                                    1
                                </div>
                                <div
                                    className="item-pagination flex-c-m trans-0-4"
                                >
                                    2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <div>
            <PageHeader />
            <Content />
        </div>
    )
}

export default Products
