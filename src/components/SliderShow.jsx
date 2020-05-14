import React from 'react'
import Slider from 'react-slick'

const SliderShow = (props) => {
    const contentBlock = () => {
        let slides = [
            {
                image: '/images/master-slide-02.jpg',
                text_line_1 : "Women Collection 2020",
                headline : "Women Collection 2020",
                button: { 
                    label: "SHOP NOW"
                }
            },
            {
                image: '/images/master-slide-02.jpg',
                text_line_1 : "Men Collection 2020",
                headline : "Man Collection 2020",
                button: { 
                    label: "SHOP NOW"
                }
            },
            {
                image: '/images/master-slide-02.jpg',
                text_line_1 : "Kids Collection 2020",
                headline : "Kids Collection 2020",
                button: { 
                    label: "SHOP NOW"
                }
            },
        ]
        return slides.map((x) => (
            <div>
                <div
                    className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170"
                    style={{
                        backgroundImage: 'url(images/master-slide-02.jpg)',
                        backgroundSize:'100%'
                    }}
                >
                    <span
                        className="caption1-slide1 m-text1 t-center animated m-b-15"
                        data-appear="fadeInDown"
                    >
                       {x.text_line_1}
                    </span>

                    <h2
                        className="caption2-slide1 xl-text1 t-center animated m-b-37"
                        data-appear="fadeInUp"
                    >
                        {x.headline}
                    </h2>

                    <div
                        className="wrap-btn-slide1 w-size1 animated"
                        data-appear="zoomIn"
                    >
                        <a
                            href="product.html"
                            className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4"
                        >
                            {x.button.label}
                        </a>
                    </div>
                </div>
            </div>
        ))
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    }
    return (
        <section className="slide1">
            <div className="wrap-slick1">
                <div className="slick1">
                    <Slider {...settings}>{contentBlock()}</Slider>
                </div>
            </div>
        </section>
    )
}

export default SliderShow
