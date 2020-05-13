import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const WidgetKategori = () => {
    const [category, setCategory] = React.useState([])
    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_SERVER}/kategori.json`)
            .then((response) => {
                let data = response.data
                setCategory(data.data)
            })
    }, [])

    const ShowCategory = () => {
        let items = []
        if (category.length > 0) {
            category.map((x) => {
                return items.push(
                    <div key={x.id} className="col-4">
                        <Link to={`/catalog/${x.id}`}>
                            <div className="card h-100">
                                <div className="card-body">{x.name}</div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
        return items
    }

    return (
        <div>
            <div>Kategori</div>
            <div className="row no-gutters text-center">
                <ShowCategory />
            </div>
        </div>
    )
}

export default WidgetKategori
