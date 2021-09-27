import React,{Fragment} from 'react'
import Map from '../../Styles/Images/directions.svg';
import Mapslots from '../../Reservation/UI/Mapslots';
import Maps from '../../Reservation/UI/Maps';
import styles from '../Assets/directory.module.css'


const DirectoryMap=()=>{
   
    return (
        <Fragment>
           <Maps Img={Map} head={"Location Map"} styles={styles.mapImg} /> 
           <div className="slotsDiv">
                <Mapslots used={78} reserved={78} available={491} selected={0} />
            </div>
        </Fragment>
    )
}

export default DirectoryMap