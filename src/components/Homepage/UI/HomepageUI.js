import React, { Fragment } from 'react'
import Footer from '../../Footer/Container/Footer'
import Header from '../../Header/Container/Header'
import LocationOnIcon from '@material-ui/icons/LocationOn';

const HomepageUI=()=>{
    
    return(
       <Fragment>
        <Header/>
        <Footer icon={<LocationOnIcon/>} text={"220 Realty Drive, Cheshire Connecticut"} btnText={`Get Direction`} link={"http://https//goo.gl/maps/6Po4X3iKiNbWTxbo7"} />
       </Fragment>
    )
}


export default HomepageUI