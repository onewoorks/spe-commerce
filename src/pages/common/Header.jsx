import React from 'react'
import { 
    Link 
} from 'react-router-dom'

const CommonHeader = (props) => {

    let breadcrumb = props.breadcrumb
    return (
        <div style={{marginBottom:20}}>
            <div className="navbar bg-light fixed-top">
                <div className="navbar-brand">SPE</div>
            </div>

            <nav>
                <ol className="breadcrumb">
                    { breadcrumb.map((x,key) => <li key={key}  className="breadcrumb-item"><Link to={x.uri} >{x.name}</Link></li>) }
                </ol>
            
            </nav>
        </div>
    )
}

export default CommonHeader