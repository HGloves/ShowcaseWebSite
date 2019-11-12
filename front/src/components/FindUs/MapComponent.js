import React, { Component } from 'react'
import MapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"

import Icon from '@material-ui/core/Icon';

import epitechLogo from '../../ressources/images/epitechMarker.png';

const TOKEN = 'pk.eyJ1IjoiaHVnby1jb2RpbmFjaCIsImEiOiJjazFmNGc1YngwbzI5M2lwaTd6cHNibWhkIn0.WC9XfOVV7QLFPWExRejYOQ'

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};

class MapComponent extends Component {

    state = {
        viewport: this.props.defaultViewPort,
        searchResultLayer: null
    }

    mapRef = React.createRef()

    _onViewportChange = newViewport => {
        this.setState({
            viewport: { ...this.state.viewport, ...newViewport }
        })
    }

    renderPopup(index){
        return this.state.popupInfo && (
        <Popup tipSize={5}
        anchor="bottom-right"
        longitude={3.886071}
        latitude={43.608237}
        onMouseLeave={() => this.setState({popupInfo: null})}
        closeOnClick={true}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '10px' }}>
                <span style={{ fontFamily: "'Open Sans', sans-serif", color: "#1C3956", fontSize: "16px", fontWeight: "bold", width: "100%"}} >{'{EPITECH MONTPELLIER}'}</span>
                <span style={{ fontFamily: "'Open Sans', sans-serif", color: "#AF8F61", fontSize: "16px", width: "100%"}} >3 Place Paul Bec</span>
                <div style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
                    <img alt='epitechLogo' src={epitechLogo} style={{ marginTop: '10px', width: '120px' }} />
                </div>
            </div>
        </Popup>
        )
    }

    render() {
        const { viewport } = this.state;

        return (
            <MapGL
                {...viewport}
                width='100%'
                height='100vh'
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/hugo-codinach/ck1f5s8j70yw71ct9pcawprhr"
                onViewportChange={this._onViewportChange}
            >
                <div>
                    <div>
                        <Marker longitude={3.886071}
                        latitude={43.608237}>
                            <Icon style={{ fontSize: '40px', color: '#1C3956' }} onMouseEnter={()=>this.setState({popupInfo: true})}
                            onMouseLeave={()=>this.setState({popupInfo: null})}>where_to_vote</Icon>
                        </Marker>
                        {this.renderPopup()}
                    </div>
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
                </div>
            </MapGL>
        )
    }
}

export default MapComponent;

// lat: 43.608237,
//     long: 3.886071,
//     name: "ABC Hospitals",
//     info: 10