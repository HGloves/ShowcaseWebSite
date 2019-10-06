//Imports
import React, { Component } from 'react'

//Style
import "./FindUsComponent.css"

import MapComponent from './MapComponent'

const defaultViewPort = {
    latitude: 43.608237,
    longitude: 3.886071,
    transitionDuration: 3000,
    zoom: 13,
}

class FindUsComponent extends Component {

    render() {
        return (
            <div className="findUsContainer">
                <MapComponent defaultViewPort={defaultViewPort} />
            </div>
        )
    }
}

export default FindUsComponent;