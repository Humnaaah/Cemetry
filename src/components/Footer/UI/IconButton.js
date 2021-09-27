import React from 'react'
import Button from '@material-ui/core/Button';

const IconButton=(props)=>{
    return(
      <Button variant="contained" className={props.style} startIcon={props.icon}> 
            {props.text} 
        </Button> 
    )  
}

export default IconButton