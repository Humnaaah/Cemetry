import React,{Fragment, useState} from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { Form, Input, Button,Tag,Select,Checkbox } from 'antd';
import styles from '../Assets/reservation.module.css'
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const {Option} = Select;
const ReservationForm=(props)=>{
    var UsaStates = require('usa-states').UsaStates;
    var usStates = new UsaStates().states;
    const [confirm, setConfirm] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    console.log("states",usStates);
    const plotRemove=()=>{
        console.log('proceeding back')
        props.callBack();
    }
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
        if(e.target.checked === true && name!=="" && email !=="" && phone !=="" && address !== "" && city !== "" && state !==""){
            setConfirm(true)
        }
        if(e.target.checked === false || name==="" || email ==="" || phone==="" || address === "" || city === "" || state ===""){
            setConfirm(false)
        }
      }
    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '$not a valid email!',
        }
      };
    return (
        <Fragment> 
            <div className={styles.formContainer}>
                    <Fragment>
                        <h2 className={styles.subHead}> You have selected <b> 1 </b> Plot fro Road <b> 5 </b> Sector <b> A </b>.  </h2>
                        <Tag className={styles.plotTag}>
                            <ClearIcon className={styles.plotDelete} onClick={plotRemove}/>
                            <br/>
                           <span> 517 A </span>
                        </Tag>
                        <Form validateMessages={validateMessages}  layout={"vertical"} requiredMark={false} >
                        <div className='row mtt-20'>
                           <div className='col-lg-1 col-md-1'></div>
                           <div className='col-lg-10 col-md-10 col-sm-12'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-12 inputErros'>
                                        <Form.Item name={['name']} label="Full Name" rules={[{ required: true,whitespace: true  }]}>
                                            <Input onChange={name => setName(name)}/>
                                        </Form.Item>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 inputErros'>
                                        <Form.Item name={['email']} label="Email Address" rules={[{type:"email", required: true,whitespace: true  }]}>
                                            <Input onChange={email => setEmail(email)}/>
                                        </Form.Item>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 inputErros'>
                                        <Form.Item name={['number']} label="Phone" rules={[{ required: true, whitespace:true }]}>
                                        <PhoneInput
                                            country={'us'}
                                            onChange={phone => {setPhone(phone);console.log("phone number is", phone)}}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 inputErros'>
                                        <Form.Item name={['street']} label="Street Address" rules={[{ required: true,whitespace: true  }]}>
                                            <Input  onChange={address => setAddress(address)} />
                                        </Form.Item>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 inputErros'>
                                        <Form.Item name={['city']} label="City/Town" rules={[{ required: true,whitespace: true  }]}>
                                            <Input  onChange={city => setCity(city)}/>
                                        </Form.Item>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 inputErros'>
                                        <Form.Item name={['state']} label="State" rules={[{ required: true, }]}>
                                        <Select className='stateSelection' placeholder="select state"  onChange={value => setState(value)}>
                                            {usStates.map((item,i)=>(
                                                <Option key={i} value={item.name} label={item.name}>{item.name} </Option>
                                            ))}
                                        </Select>
                                        </Form.Item>
                                    </div>
                                </div>
                                        <Form.Item
                                                className='mtt-20'
                                                name="agreement"
                                                valuePropName="checked"
                                                rules={[
                                                {
                                                    validator: (_, value) =>
                                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                                },
                                                ]}
                                            >
                                                <Checkbox onChange={onChange}>
                                                    I have read and agree to the <b><Link to="/termsandconditions" className='linkGreen'>Terms & Condiitons</Link> </b> 
                                                </Checkbox>
                                        </Form.Item>
                                        <Form.Item >
                                        <Link to='/greetings'> <Button type="primary" htmlType="submit" disabled={!confirm} className={styles.confirmationBtn}>
                                            Confirm & Proceed
                                        </Button> </Link>
                                        </Form.Item>
                            </div>
                        </div>
                        </Form>
                    
                    </Fragment>
            </div>
        </Fragment>
    )
}




export default ReservationForm