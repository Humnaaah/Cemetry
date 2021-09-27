import React from 'react';
import styles from '../Assets/about.module.css';
const OverviewImg=(props)=>{
    return(
        <div className='col-lg-4'>
            <img src={props.img} className={styles.bitmap} alt="bitmaps"/>
        </div>
    )
}
export default OverviewImg