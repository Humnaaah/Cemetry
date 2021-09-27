import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import styles from '../Assets/directory.module.css';

const DirectoryList=(props)=>{
    return(
        <Fragment>
           <Link to='/details' className={styles.linkStyle}> <div className={styles.cards}>
                <h2 className={styles.cardTitle}>{props.data.name}</h2>
                <p className={styles.cardDetail}> 
                    Grave No: <span className="highlighted"> <b> {props.data.grave} </b> </span> 
                    Road: <span className="highlighted"> <b> {props.data.road} </b> </span>, 
                    Sector <span className="highlighted"> <b> {props.data.sector} </b> </span> 
                </p>
                <p className={styles.cardDetail}> {props.data.date} </p> 
            </div>
            </Link>
        </Fragment>
    )
}


export default DirectoryList