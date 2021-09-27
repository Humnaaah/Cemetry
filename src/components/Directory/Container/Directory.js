import React from 'react'
import DirectoryUI from '../UI/DirectoryUI'
import Img1 from '../../Styles/Images/smart-senior-businessman-working-laptop-wearing-tie-glasses-elderly-man-entrepreneur-home-workplace-using-portable-computer-sitting-desk-while-wife-is-holding-tv-remote.jpg';
import Img2 from "../../Styles/Images/senior-businessman-holding-cup-coffee-working-laptop-elderly-man-entrepreneur-home-workplace-using-portable-computer-sitting-desk-while-wife-is-holding-tv-remote.jpg";
import Img3 from "../../Styles/Images/senior-man-using-credit-card-check-bank-account-elderly-man-checking-online-banking-make-shppping-payment-looking-laptop-while-wife-is-reading-book-sitting-sofa.jpg"

let directoryList=[
    {
        name:'Ali Ahmed',
        grave:'527-A',
        road:'5',
        sector:'A',
        date:'February 27, 2019',
        rendered:"Ali Ahmed : '527-A: 5,A, February 27, 2019 "
    },
    {
        name:'Muhammad Salman',
        grave:'527-B',
        road:'5',
        sector:'A',
        date:'November 13, 2016',
        rendered:"Muhammad Salman : '527-B: 5, November 13, 2016 "
    },   
]
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
const Directory=()=>{
    return <DirectoryUI data={directoryList} details={directoryDetails}/>
}
export default Directory