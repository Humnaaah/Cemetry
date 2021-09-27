import React from 'react'
import styles from '../Assets/footer.module.css';
import IconButton from './IconButton';

const FooterUI=(props)=>{
    return(
        <div className={styles.footerDiv}>
            <h4 className={styles.footerText}>{props.text} </h4>
            <a href={props.link} target="_blank" rel="noreferrer" className={styles.linkStyle}> 
            <IconButton style={styles.footerBtn} icon={props.icon} text={props.btnText}/>
            </a>
        </div>
    )
}

export default FooterUI