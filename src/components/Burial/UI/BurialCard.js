import React from 'react'
import styles from '../Assets/burial.module.css';

const BurialCard=(props)=>{
    return(
        <div className='col-lg-12 col-sm-12 col-md-12'>
            <div className={styles.burialCard}>
                <h2 className={styles.title}> {props.data.title} </h2>
                <div className={styles.address}> 
                        <h6> {props.data.address}  </h6>
                        <span> {props.data.contact} </span>
                        <h6>  {props.data.name} </h6>
                        <h6> {props.data.designation}</h6>  
                        <span>{props.data.url} </span>
                </div>
            </div>
        </div>
    )
}

export default BurialCard