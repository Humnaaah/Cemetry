import React,{Fragment} from 'react'
import grave from '../../Styles/Images/grave-1.png';
import tree from '../../Styles/Images/tree.png';

const MapSelection=(props)=>{

    // const btnClicked = () =>{
    //     console.log('Call Back Btn Function')
    //     props.callBack();
    // }
    return(
        <Fragment>
           <div className='slotItems'>  
            <div className='mapItemSlot'>
                <span className='used'>
                    <img src={grave} alt="grave" />    
                </span> <label>  {props.used} <i> Used </i> </label>
            </div>
            <div className='mapItemSlot'>
                <span className='reserved'> 
                </span> <label>  {props.reserved} <i> Reserved </i>  </label>
            </div>

            <div className='mapItemSlot'>
                <span className='available'>  
                </span> <label>  {props.available} <i> Available </i>  </label>
            </div>

            <div className='mapItemSlot'>
                <span className='selected'>
                       
                </span> <label>  {props.selected} <i> Selected </i>  </label>
            </div>
            <div className='mapItemSlot'>
                <span className='used'>
                <img src={tree} alt="trees" />    
                </span> <label> {props.trees} <i>Tree </i> </label>
            </div>
           </div>
        </Fragment>
    )
}

export default MapSelection