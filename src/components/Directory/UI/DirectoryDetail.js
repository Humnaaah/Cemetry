import React,{ Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'antd';
import styles from '../Assets/directory.module.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '../../Footer/UI/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import DirectoryMap from './DirectoryMap';

const DirectoryDetail=(props)=>{
    return(
        <Fragment>
            <div className={styles.backLink}>
               <Link to='/directory'> <ArrowBackIosRoundedIcon className={styles.backArrow}/>  </Link> 
            </div>
            <div className={styles.details}>
                {props.details.map((item,i)=>(
                    <div key={i}>
                        <Carousel>
                            {item.slides.map((items,i)=>(
                                 <div key={i}>
                                    <img className={styles.carouselSlide} src={items.img} alt='carousel-slide'/>
                               </div>
                            ))}
                        </Carousel>
                        <h1 className={styles.title}>{item.title} </h1>
                        <div className={styles.borderedRow}> 
                            <h6 > Date of Birth  <span > {item.dob} </span> </h6> 
                            <hr className="mtt-3 mbb-3"/>
                            <h6 > Date of Death <span > {item.dod} </span> </h6>
                            <hr className="mtt-3 mbb-3"/>
                            <h6 > Location  <span > {item.location} </span> </h6>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.mapDiv}>
                     <DirectoryMap/>           
            </div>
            <div className="text-center">
                    <IconButton style={styles.footerBtn} icon={<LocationOnIcon/>} text={"Get Direction"}/>
            </div>
        </Fragment>
        
    )
}

export default DirectoryDetail