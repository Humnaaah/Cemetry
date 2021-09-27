import React from 'react'
import grave from '../../Styles/Images/grave-1.png';
import tree from '../../Styles/Images/tree.png';

const Mapslots=(props)=>{
    return(
        <div className='slotItems'>
            <div className='itemSlot'>
                <span className='used'>
                    <img src={grave} alt='grave' />    
                </span> 
                <p>  {props.used}  </p>
                    <p className='slotLabel'> Used </p>
            </div>
            <div className='itemSlot'>
                <span className='reserved'> 
                </span> <p>  {props.reserved}  </p>
                 <p className='slotLabel'> Reserved</p> 
            </div>

            <div className='itemSlot'>
                <span className='available'>  
                </span> 
                <p>  {props.available}  </p>
                 <p className='slotLabel'> Available </p>
            </div>

            <div className='itemSlot'>
                <span className='selected'>
                       
                </span> 
                <p> {props.selected} </p> 
                <p className='slotLabel'> Selected  </p>
            </div>
            <div className='itemSlot'>
                <span className='used'>
                <img src={tree} alt='tree'/>    
                </span>
                <p> {props.trees}  </p>
                <p className='slotLabel'>Tree </p> 
            </div>
        </div>
    )
}

export default Mapslots