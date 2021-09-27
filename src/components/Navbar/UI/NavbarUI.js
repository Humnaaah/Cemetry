import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import PhoneIcon from '@material-ui/icons/Phone';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import styles from '../Assets/navbar.module.css';
import logo from '../../Styles/Images/logo_GOP.svg'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import IconButton from '../../Footer/UI/IconButton';

const NavbarUI = () =>{
    const [scrolled,setScrolled]=useState(false);
    const [activeLink, setActiveLink] = useState(localStorage.getItem("active"));
    const maintainLink=(value)=>{
        console.log("Active state is",value)
        localStorage.setItem('active',value )
    }
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 100 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    useEffect(() => {
       maintainLink(activeLink);
       window.addEventListener('scroll',handleScroll)
      },[activeLink]);
   
    return(
        <div className={scrolled ? "header2" : `${styles.nav} fixed-top`}>
            <nav id="topnavrow" className="navbar navbar navbar-light navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <button className={`navbar-toggler `} type="button" data-toggle="collapse" data-target="#navcollapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" id='navbar-collapse-x'></span>
                    </button>
                    <Link to='/' className={scrolled? "navbar-brand" : `navbar-brand ${styles.brand}`} onClick={()=>setActiveLink("home")} >
                      <img src={logo} alt='gradens_of_peace' className={scrolled? "logoScroll":styles.logo}/>
                         </Link>
                    <div className={styles.contactDiv}>
                        <a href="tel:+1-203-718-6678" onClick={()=>setActiveLink("contact")}>
                            <PhoneIcon className={scrolled? "contactScrollIcon" : styles.defaultIcon}/> 
                        </a>
                        <span className={scrolled ? "ScrollContact" : styles.contactTxt}> +1-203-718-6678</span> 
                    </div> 
                </div>
            </nav>
    
            <nav className="navbar navbar-expand-lg navbar-center py-0 sticky-top">
                <div className="container">
                    <div id="navcollapse" className={scrolled ? `collapse navbar-collapse scrolledMargin ${styles.collapsable}` : `collapse navbar-collapse my-2 ${styles.collapsable}`}>
                        <div className="navbar-nav">
                            <button className={`navbar-toggler ${styles.mobileCollapsable}`} type="button" data-toggle="collapse" data-target="#navcollapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className='navbar-toggle-con'><CloseRoundedIcon/> </span>
                            </button>
                            <Link className={`nav-item nav-link `}  to="/" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={()=>setActiveLink("home")} ><HomeRoundedIcon className={styles.navHome}/></Link>
                            <Link className={activeLink==="reservation" ?`nav-item nav-link ${styles.activeLinks}`: `nav-item nav-link ${styles.navLinks}`}  to="/reservation" onClick={()=>setActiveLink("reservation")} data-toggle="collapse" data-target=".navbar-collapse.show">Reservation</Link>
                            <Link className={activeLink==="burial"?`nav-item nav-link ${styles.activeLinks}`: `nav-item nav-link ${styles.navLinks}`} to="/burial" onClick={()=>setActiveLink("burial")} data-toggle="collapse" data-target=".navbar-collapse.show">Burial</Link>
                            <Link className={activeLink==="termsandconditions"?`nav-item nav-link ${styles.activeLinks}`: `nav-item nav-link ${styles.navLinks}`} to="/termsandconditions" data-toggle="collapse" onClick={()=>setActiveLink("termsandconditions")} data-target=".navbar-collapse.show">Terms & Conditions</Link>
                            <Link className={activeLink==="directory"?`nav-item nav-link ${styles.activeLinks}`: `nav-item nav-link ${styles.navLinks}`} to="/directory" data-toggle="collapse" onClick={()=>setActiveLink("directory")} data-target=".navbar-collapse.show">Directory</Link>
                            <Link className={activeLink==="contact"  ?`nav-item nav-link ${styles.activeLinks}`: `nav-item nav-link ${styles.navLinks}`} to="/contact" data-toggle="collapse" onClick={()=>setActiveLink("contact")} data-target=".navbar-collapse.show">Contact</Link>
                         
                            <div className={styles.navFooter}>
                            <h6> 220 Realty Dr, Cheshire,
                                CT 06410, United States
                                <span className='highlighted'><b> +1-203-718-6678 </b>  </span>
                            </h6> 
                            <a target="_blank" rel="noreferrer" data-toggle="collapse" data-target=".navbar-collapse.show" className={styles.linkStyle}  href="https://www.google.com/maps/place/Gardens+of+Peace+Cemetery/@41.5337143,-72.884289,1173m/data=!3m1!1e3!4m5!3m4!1s0x89e7c87d4db5df05:0x4aa469b49c3e9680!8m2!3d41.534379!4d-72.8873072"> 
                                <IconButton style={styles.footerBtn} icon={<LocationOnRoundedIcon/>} text={"Get Direction"}/>
                            </a>
                           
                        </div>
                        </div>
                       
                    </div>
                </div>
            </nav>
    
        </div>


    )
}


export default NavbarUI;
