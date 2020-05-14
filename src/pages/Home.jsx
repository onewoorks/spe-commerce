import React from 'react'

import SliderShow from '../components/SliderShow.jsx'
import Banner from '../components/Banner.jsx'
import FeaturedProduct from '../components/FeaturedProduct.jsx'
import Banner2 from '../components/Banner2.jsx'
import Blog from '../components/Blog.jsx'
import Ads from '../components/Ads.jsx'

const Home = (props) => {
    return (
        <div>
            <SliderShow />
            <Banner />
            <FeaturedProduct />
            <Banner2 />
            <Blog />
            <Ads />
        </div>
    )
}

export default Home