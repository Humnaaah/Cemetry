import React, { Fragment } from 'react';
import BurialCard from './BurialCard';

let burialList=[
    {
        title:'McClam Funeral Home',
        address:'96 Dixwell Avenue, Hamden, CT 06514',
        contact: '(203) 786-4732',
        name:'Darrell L. McClam',
        designation: 'Owner',
        url: 'www.mcclamfuneralhome.net'
    },
    {
        title:'Lester Gee Funeral Home',
        address:'1390 Fairfield Avenue, Bridgeport, CT 06605',
        contact: '(203) 335-5252',
        name:'Christopher Gee',
        designation: 'Funeral Director',
        url: 'www.lestergeefh.com'
    },
    {
        title:'McClam Funeral Home',
        address:'96 Dixwell Avenue, Hamden, CT 06514',
        contact: '(203) 786-4732',
        name:'Darrell L. McClam',
        designation: 'Owner',
        url: 'www.mcclamfuneralhome.net'
    },
    {
        title:'Lester Gee Funeral Home',
        address:'1390 Fairfield Avenue, Bridgeport, CT 06605',
        contact: '(203) 335-5252',
        name:'Christopher Gee',
        designation: 'Funeral Director',
        url: 'www.lestergeefh.com'
    }
]

const BurialUI=()=>{
    return(
        <Fragment>
              <h1 className='headTitle'> Burial </h1>
              <h6 className='subTitle'> You may work with any funeral home you choose, however, we have experience with: </h6>
                <div className='row'>
                   {burialList.map((item,i)=><BurialCard data={item} key={i}/>)}
                </div>
        </Fragment>
    )
}

export default BurialUI