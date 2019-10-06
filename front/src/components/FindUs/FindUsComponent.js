//Imports
import React, { Component } from 'react'

//Style
import "./FindUsComponent.css"
import epitechLogo from '../../ressources/images/epitechMarker.png'

//map
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class FindUsComponent extends Component {

    state = {
        mapParam: {
            lat: 43.608237,
            lng: 3.886071,
            zoom: 13,
        }
    }

    render() {
        const { lat, lng, zoom } = this.state.mapParam;
        const position = [lat, lng];

        return (
            <div className="findUsContainer">
                <Map center={position} zoom={zoom} className="findUsMap">
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            <div className='findUsPop'>
                                <span className='findUsPopTitle'>{"{EPITECH MONTPELLIER}"}</span>
                                <span className='findUsPopSubtitle'>3 place Paul Bec</span>
                                <div className='findUsImgContainer'>
                                    <img className='findUsEpitechLogo' alt='logo' src={epitechLogo}/>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}

export default FindUsComponent;