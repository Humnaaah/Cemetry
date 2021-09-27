import React from 'react'
import Img1 from '../../Styles/Images/smart-senior-businessman-working-laptop-wearing-tie-glasses-elderly-man-entrepreneur-home-workplace-using-portable-computer-sitting-desk-while-wife-is-holding-tv-remote.jpg';
import Img2 from "../../Styles/Images/senior-businessman-holding-cup-coffee-working-laptop-elderly-man-entrepreneur-home-workplace-using-portable-computer-sitting-desk-while-wife-is-holding-tv-remote.jpg";
import Img3 from "../../Styles/Images/senior-man-using-credit-card-check-bank-account-elderly-man-checking-online-banking-make-shppping-payment-looking-laptop-while-wife-is-reading-book-sitting-sofa.jpg"
import DirectoryDetail from '../UI/DirectoryDetail';

const directoryDetails=[
    {
        title:'Ali Ahmed',
        dob:'September 17,1948',
        dod:'February 27, 2019',
        location:'527-A, Road5, Sector A',
        slides:[
            {
                img:Img1
            },
            {
                img:Img2
            },
            {
                img:Img3
            }
        ]
    }
]
const DirectoryDetails=()=>{
    return <DirectoryDetail details={directoryDetails}/>
}
export default DirectoryDetails