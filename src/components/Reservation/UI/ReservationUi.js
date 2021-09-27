import React,{ Fragment,useState } from 'react'
import styles from '../Assets/reservation.module.css'
import { Select } from 'antd';
import reservation from '../../Styles/Images/default.svg'
import sect from "../../Styles/Images/sectionA1.svg"
// import reserveSect from "../../Styles/Images/reserve.svg"
import Maps from './Maps';
import MapSelection from './mapSelection';
import ReservationForm from './ReservationForm';

const { Option } = Select;


const ReservationUi=()=>{
    const [selected, setSelected] = useState('');
    const [plotSelected, setPlotSelected] = useState(false);
    const [plotList, setPlotList] = useState(0);
    const [proceedNext, setProceedNext] = useState(false);
    
    const onChange = (value) => {
        console.log(`selected ${value}`);
        setSelected(value)
      }   
     const onSearch = (val) => {
        console.log('search:', val);
      }
      const plotSelection=()=>{
        console.log('Clicked on Img')
        setPlotSelected(true)
        setPlotList(1)
      }
      const onProceed = () =>{
        setProceedNext(true)
      }
      const onBack = () =>{
        console.log('proceeded back')
        setProceedNext(false)
        setPlotSelected(false)
        setPlotList(0)
      }
    return(
        <Fragment>
              <h1 className='headTitle'> {proceedNext ? "Cemetry Form" : "Cemetery Map" }</h1>
              <h6 className='subTitle'> {proceedNext ? "Burial Reservation Process" : "Select Plot(s) from Cemetry Map" }</h6>
                 {
                  proceedNext?  <ReservationForm callBack={onBack}/> :
                  <div className='reservationOptions text-center'> 
                        <Select
                          showSearch
                          placeholder="Select Plot"
                          optionFilterProp="children"
                          onChange={onChange}
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                          >
                          <Option value="(1-8 Rows)">Sector A (1-8 Rows) </Option>
                          <Option value="(9-17 Rows)">Sector A (9-17 Rows)</Option>
                        </Select>
                      <div className={styles.mapDiv}  onClick={plotSelection}>
                        <Maps 
                          Img={selected === "(9-17 Rows)" ? sect : selected === "(1-8 Rows)" ? sect :  reservation } 
                          head={"Cemetery Map"} styles={styles.mapImg} /> 
                          <div className="slotsDiv">
                            {selected === '' ?
                              <Fragment> 
                                <h6 className='subHeading mtt-min-10'> Instructions </h6>
                                  <ol className='pdl-1rem mtt-min-5'>
                                    <li className="defaultListItems">  Grave size is 3.6’ x 9’ </li> 
                                    <li className="defaultListItems">  Total area 3.23 acers approx. </li>
                                    </ol> 
                              </Fragment>
                            :  selected === '(1-8 Rows)' ? 
                            <div className='row'>
                              <div className='col-lg-7 col-sm-12'> 
                                  <MapSelection used={78} reserved={28} available={491} selected={0} trees={14}  disabled={!plotSelected} callBack={onProceed}/>
                              </div>    
                              <div className='col-lg-5 col-sm-12 col-md-5'> 
                                  <div className='btnSlot'>
                                    <button className={plotSelected ? styles.btnEnabled : styles.disabledBtn} disabled={!plotSelected} onClick={onProceed} > Proceed with {plotList} Selected Plot </button> 
                                  </div>
                                  </div>
                                </div>
                              : <div className='row'>
                                <div className='col-lg-7 col-sm-12'> 
                              <MapSelection used={13} reserved={2} available={491} selected={0} trees={16}  disabled={!plotSelected} callBack={onProceed}/>
                             </div>
                             <div className='col-lg-5 col-sm-12 col-md-5'> 
                              <div className='btnSlot'>
                                <button className={plotSelected ? styles.btnEnabled : styles.disabledBtn} disabled={!plotSelected} onClick={onProceed} > Proceed with {plotList} Selected Plot </button> 
                              </div>
                              </div>
                            </div>}
                          </div>
                      </div>
                  </div>
                }
        </Fragment>
    )
}


export default ReservationUi