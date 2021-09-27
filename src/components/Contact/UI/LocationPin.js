import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const LocationPin = ({ text }) => (
    <div className="pin">
      <LocationOnIcon className="pin-icon"/>
      <p className="pin-text">{text}</p>
    </div>
  )

export default LocationPin