import React from 'react'

const Filters = (props) => {
    return (
        <div>
            <h4 class="m-text14 p-b-32">Filters</h4>

            <div class="filter-price p-t-22 p-b-50 bo3">
                <div class="m-text15 p-b-17">Price</div>

                <div class="wra-filter-bar">
                    <div id="filter-bar"></div>
                </div>

                <div class="flex-sb-m flex-w p-t-16">
                    <div class="w-size11">
                        <button class="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">
                            Filter
                        </button>
                    </div>

                    <div class="s-text3 p-t-10 p-b-10">
                        Range: $<span id="value-lower">610</span> - $
                        <span id="value-upper">980</span>
                    </div>
                </div>
            </div>

            <div className="search-product pos-relative bo4 of-hidden">
                <input
                    className="s-text7 size6 p-l-23 p-r-50"
                    type="text"
                    name="search-product"
                    placeholder="Search Products..."
                />

                <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                    <i className="fs-12 fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default Filters
