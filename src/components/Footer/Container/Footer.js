import React from 'react';
import FooterUI from '../UI/FooterUI';

const Footer=(props)=>{
    return <FooterUI text={props.text} btnText={props.btnText} link={props.link} icon={props.icon} />
}

export default Footer