import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const AllCategory = () => {
    return [
        { id: '1', name: 'A' },
        { id: '2', name: 'B' },
        { id: '3', name: 'C' },
        { id: '4', name: 'D' },
    ]
}

const PickedCategory = (props, category_slug) => {
    let get_category = AllCategory().filter((x) => x.id === category_slug)[0]
    let detail_category = {
        group: 'catalog',
        uri: `./catalog/${category_slug}`,
        name: get_category.name,
    }
    props.goToPage(detail_category)
    return [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
        { id: 4, name: 'D' },
        { id: 5, name: 'E' },
        { id: 6, name: 'E' },
        { id: 7, name: 'E' },
        { id: 8, name: 'E' },
        { id: 9, name: 'E' },
        { id: 10, name: 'E' },
        { id: 11, name: 'E' },
    ]
}

const ProductCategory = (props) => {

    let group_link =
        typeof props.match.params.catalog_slug === 'undefined'
            ? 'catalog'
            : 'product'
    let categories =
        typeof props.match.params.catalog_slug === 'undefined'
            ? AllCategory()
            : PickedCategory(props, props.match.params.catalog_slug)

    const Categories = () => {
        return categories.map((x) => {
            return (
                <div className="small_product_col col-6" key={x.id}>
                    <Link to={`/${group_link}/${x.id}`}>
                        <div className="card text-center">
                            <img
                                className="card-img-top"
                                src="https://www.25karats.com/articles/wp-content/uploads/2015/07/wedding-rings1.jpg"
                                alt=""
                            />
                            <div className="card-footer">{x.name}</div>
                        </div>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div className="container">
            <div  style={{padding:8}}>
                <div className="row">
                <Categories />
            </div>
            </div>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        goToPage: (category) => {
            dispatch({
                type: 'UPDATE_BREADCRUMB',
                payloads: {
                    breadcrumb: category,
                },
            })
        },
    }
}

export default connect(null, mapDispatchToProps)(ProductCategory)
