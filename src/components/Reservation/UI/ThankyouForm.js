import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom'
import styles from '../Assets/reservation.module.css';

const ThankyouForm=()=>{
    return(
        <div className={`${styles.greetingContainer} mtt-20`}>
            <div className='mtt-10-per'>
                <h1 className="TitleHead"> Thank You!</h1>
                <p className="subTitleTag"> Your request has been successfully submitted, one of our team member will contact you shortly. </p>  
                <Link to='/'>   <Button type="primary" htmlType="submit" className={`mtt-10-per ${styles.confirmBtn}`} > OK </Button> </Link>
            </div>
        </div>
    )
}


export default ThankyouForm