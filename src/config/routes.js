import React,{useState,useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage/Container/Homepage';
import Navbar from '../components/Navbar/Container/Navbar';
import '../../src/components/Styles/margins.css';
import TermsConditions from '../components/Rules and Regulations/Container/Terms&Conditions';
import Burial from '../components/Burial/Container/Burial';
import Contact from '../components/Contact/Container/Contact';
import Directory from '../components/Directory/Container/Directory';
import DirectoryDetails from '../components/Directory/Container/DirectoryDetails';
import '../App.css';
import 'antd/dist/antd.css';
import Reservation from '../components/Reservation/Container/Reservation';
import ThankyouForm from '../components/Reservation/UI/ThankyouForm';
import About from '../components/About/Container/about';
import Maps from '../components/Maps/Container/DirectMap';

const App=()=>{
    const [scrolled,setScrolled]=useState(false);
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
       window.addEventListener('scroll',handleScroll)
      },[]);
   
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <div className={scrolled? "framScrolled" : 'mainFrame'}>
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Homepage}/>
                            <Route path='/burial' component={Burial}/>
                            <Route path='/about' component={About}/>   
                            <Route path='/termsandconditions' component={TermsConditions}/>
                            <Route path='/directory' component={Directory}/>
                            <Route path='/contact' component={Contact}/>
                            <Route path='/details' component={DirectoryDetails}/>
                            <Route path="/reservation" component={Reservation}/>
                            <Route path="/greetings" component={ThankyouForm}/>
                            <Route path="/maps" component={Maps}/>

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App