import React, { Fragment } from 'react';
import bitmap1 from '../../Styles/Images/Image_1.png';
import bitmap2 from '../../Styles/Images/Image_2.png';
import bitmap3 from '../../Styles/Images/Image_3.png';
import styles from '../Assets/about.module.css';
import OverviewImg from './OverviewImg';
const AboutUi=()=>{
    return(
        <Fragment>
            <h1 className='headTitle'> Cemetery Overview </h1>
                {/* Desktop Screen */}
                   <div className={styles.desktopVersion}>
                        <div className='row mtt-10'>
                                <OverviewImg img={bitmap1}/>
                                <OverviewImg img={bitmap2}/>
                                <OverviewImg img={bitmap3}/>
                        </div>
                        <div className={styles.overviewTxt}>
                            <p>
                                <b> Gardens of Peace </b> was established in 2016 to provide a final resting place for the community in central Connecticut. Gardens of Peace is located on several acres of tranquil, wooded grounds in Cheshire. Phase One is finished, and offers over 1,200 plots. At its completion, the cemetery will have over <b> 3,400 plots. </b>
                            </p>
                            <p>  
                                Please contact us with any questions, or to reserve a plot. Plots are <b>  $1,500. </b> We recommend purchasing a plot in advance of need, to lock in at the current price.
                            </p>
                            <p>
                                Gardens of Peace will be pristinely maintained by a dedicated landscaping crew. The cost of your burial plot will include perpetual care to ensure that your area will always remain attractive – and provide your loved ones with a calming place to visit.
                            </p>
                        </div>
                   </div>
                {/* Mobile Screen */}
                    <div className={styles.mobVersion}>
                        <div className='row'>
                            <OverviewImg img={bitmap1}/>
                            <p>
                                <b> Gardens of Peace </b> was established in 2016 to provide a final resting place for the community in central Connecticut. Gardens of Peace is located on several acres of tranquil, wooded grounds in Cheshire. Phase One is finished, and offers over 1,200 plots. At its completion, the cemetery will have over <b> 3,400 plots. </b>
                            </p>
                            <OverviewImg img={bitmap2}/>
                            <p>  
                                Please contact us with any questions, or to reserve a plot. Plots are <b>  $1,500. </b> We recommend purchasing a plot in advance of need, to lock in at the current price.
                            </p>
                            <OverviewImg img={bitmap3}/>
                            <p>
                                Gardens of Peace will be pristinely maintained by a dedicated landscaping crew. The cost of your burial plot will include perpetual care to ensure that your area will always remain attractive – and provide your loved ones with a calming place to visit.
                            </p>
                        </div>
                    </div>
        </Fragment>
    )
}

export default AboutUi