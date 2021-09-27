import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Assets/headBtns.module.css'
const HeadBtn=(props)=>{
    return(
        <div className='col-lg-4 col-md-4 col-sm-12'>
           <Link to={props.link} onClick={props.click}> <button className={styles.btnHead}> {props.name} </button> </Link>        
        </div>
    )
}
export default HeadBtn 