import React, { Fragment,useState } from 'react';
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';
import IconButton from '../../Footer/UI/IconButton';
import styles from '../Assets/contact.module.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Footer from '../../Footer/Container/Footer';

const mapStyles = {
    width: '100%',
    height: '100%'
  };
  
const ContactUI=(props)=>{
    const [showingInfoWindow, setShowingInfoWindow] = useState(false)
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, setSelectedPlace] = useState({})

    const onMarkerClick = (props, marker, e) => {
        setShowingInfoWindow(true);
        setActiveMarker(marker);
        setSelectedPlace(props);
    }

  const onClose = (props) => {
    if (showingInfoWindow) {
        setActiveMarker(null);
        setShowingInfoWindow(false)
    }
  };
    return(
        <Fragment>
            <h1 className='headTitle'> Contact </h1>
            <h6 className='subTitle'> 
                If you have any query please feel free to call us on <br/>
                    <span className='highlighted'>  +1-203-718-6678 </span>  
                or email at 
                    <span className='highlighted'> gardensofpeacect@gmail.com </span>
            </h6>
            <div className='row'>
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <div className={styles.mapDiv}>
                    
                            <Map
                                google={props.google}
                                zoom={8}
                                style={mapStyles}
                                initialCenter={
                                    {
                                        lat: 41.531220,
                                        lng: -72.891300
                                    }
                                }
                            >
                                <Marker
                                position={{ lat: 41.531220, lng:-72.891300}} 
                                label={'Gardens of Peace Cemtery'}
                                />
                                <InfoWindow
                                marker={activeMarker}
                                visible={showingInfoWindow}
                                onClose={onClose}
                                >
                                <div>
                                    <h4>{selectedPlace.name}</h4>
                                </div>
                                </InfoWindow>
                                </Map>
                       <div className={styles.btnDiv}>
                            <a href="https://www.google.com/maps/place/Gardens+of+Peace+Cemetery/@41.5344339,-72.8876313,536m/data=!3m1!1e3!4m5!3m4!1s0x89e7c87d4db5df05:0x4aa469b49c3e9680!8m2!3d41.534379!4d-72.8873072" target="_blank" className={styles.linkStyle}> 
                                <IconButton style={styles.IconBtn} icon={<LocationOnIcon/>} text={"Get Direction"}/>
                            </a>
                       </div>
                    </div>
                    <Footer text={"220 Realty Drive, Cheshire Connecticut United States"} btnText={`Call Now`}/>
                </div>
            </div>
        </Fragment>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDKTCWx0S3IrzD2erDyJLCl-OIYrYapuyw'
  })(ContactUI);