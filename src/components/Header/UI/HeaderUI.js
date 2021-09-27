import React from "react";
import styles from '../Assets/header.module.css';
import HeadBtn from "./HeadBtn";
const HeaderUI=()=>{
    return(
       <div className={styles.headCont}>
           <div className={styles.headElements}>
                <div className={styles.childsDiv}>
                    <h1 className={styles.headTitle}> رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا  <br/> وَأَنْتَ خَيْرُ الرَّاحِمِينَ </h1>
                    <h6 className={styles.subTitle}> Our Lord ,we have believed , so forgive us and have mercy upon us, and You are the best of  the best the Merciful. </h6>
                    <h5 className={styles.citation}> Al-Mu’minun (109) </h5>
                    <div className={` row ${styles.btnsDiv}`}>
                        <HeadBtn name={"Reserve Location"} link={"/reservation"} />
                        <HeadBtn name={"About Cemetery"} link={"/about"} />
                        <HeadBtn name={"Contact Us"} link={"/contact"} />
                    </div>
                </div>
           </div>
       </div>
    )
}

export default HeaderUI