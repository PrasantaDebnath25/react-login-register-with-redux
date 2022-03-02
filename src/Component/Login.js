
import React, { useState, useEffect } from 'react'   
//import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useHistory } from "react-router-dom";
//import img from 'b.jpg'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon,MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdbreact';
import './LoginStyle.css'
import { Button,Modal } from 'react-bootstrap'
import { Redirect  } from 'react-router-dom';
import Counter from './Pages/Counter'
import ShowData from './ShowData'
//const Login = ({ isShowing, hide }) => isShowing ? (
const Login = () => {
    const history = useHistory();
    const [employee, setemployee] = useState({ Email: '', Password: ''});  
    const [errors, seterrors] = useState({ emailErr: '', PasswordErr: '', formisValid: "true" });  
    const [modal, setmodal] = useState(false);
    
    const [loginStatus, setloginStatus] = useState(false);
    const [show, setShow] = useState(false);
    // const mod=false
    //const apiUrl = "http://localhost:1680/api/employee/Login";    
    const Login1 = (e) => {
            e.preventDefault();
            const data = { Email:employee.Email, Password: employee.Password };  
            
            console.log("Values are");
            console.log(data.Email);
            console.log(data.Password);
            console.log(data);
            console.log("Values are");
            localStorage.setItem("login", data);
            
            getValidation()
            if(errors.formisValid === "true"){
              console.log("Done");
              seterrors({errors:''});
              localStorage.setItem("status",true)
              //history.goBack()
              // { <ShowData /> }
              localStorage.setItem("id",5);
              history.push("/ShowData");
              //this.setState({snakbaropen:true, snakbarmsg: 'Submitted Sucessfully', changeComp: true});
            }
            else{
              console.log("Not Validate");
              console.log(errors);
              //this.setState({snakbaropen:true, snakbarmsg: 'Failed', changeComp: false});
            }
            
            //console.log(JSON.stringify(data.UserDetails))
        //     axios.post(apiUrl, data)
        //     .then((result) => {
        //         console.log(result.data);   
        //         const serializedState = JSON.stringify(result.data.UserDetails);  
        //        var a= localStorage.setItem('myData', serializedState);   
        //         console.log("A:",a)  
        //         const user =result.data.UserDetails;  
        //         console.log(result.data.message);  
        //         if (result.data.status == '200')    
        //             props.history.push('/Counter')    
        //         else
        //         alert('Invalid User');
        //     })
          };
           
          const getValidation = () => {
            //let formisValid = false;
            seterrors({...errors,
              emailErr: (employee.Email === '' ) ? 'Email id cannot be empty' : '',
              PasswordErr: (employee.Password === '' ) ? 'Password cannot be empty' :
              (employee.Password.length < 5) ? 'Password must be greater than 4 charecter' : '',
              formisValid: "false"
            });
            //return errors.formisValid;
            //console.log(errors);
          }

          const setData = (e) => {    
                e.persist();     
                console.log(e.target.value)
                setemployee({...employee, [e.target.name]: e.target.value});    
          }   

  return (

    <center>

    <MDBContainer>
      {/* <button onClick={toggle}>Modal</button> */}
        {/* <MDBModal isOpen={modal} toggle={toggle}>
          <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader> */}
          {/* <MDBModalBody> */}
        {/* <Modal >
           <Modal.Header >
              <Modal.Title>This is Title  </Modal.Title>
            </Modal.Header>  
          
          <Modal.Body>Body */}
            <MDBRow>
              <MDBCol md='8'>
              <MDBCard
                  className='card-image'
                  style={{
                    backgroundImage:
                      'url(img)',
                    width: '28rem'
                  }}
                >
                  <MDBCardBody className='mx-4'>
                    <div className='text-center'>
                      <h3 className='pink-text mb-5'>
                        <strong>Log in</strong>
                      </h3>
                    </div>
                    <MDBInput label='Your email' autofocus  value={employee.Email} onChange={ setData }  name="Email" id="Email" group type='text' validate />
                    <span style={{color: "red", display: "block"}}>{errors.emailErr}</span>
                    <MDBInput label='Your password' value={employee.Password} onChange={ setData }  name="Password" group type='password' validate />
                    <span style={{color: "red", display: "block"}}>{errors.PasswordErr}</span>
                    <div className='md-form pb-3'>
                      <div className='form-check my-6'>
                      </div>
                    </div>
                    <MDBRow className='d-flex align-items-center mb-2'>
                      <MDBCol md='12' className='text-center'>
                        <Button  className='z-depth-1' color='pink' rounded block onClick={Login1 } >
                          Sign up
                        </Button>
                        
                        {/* <Button  type="submit">
                        Sign Up
                      </Button> */}
                      </MDBCol>
                      {/* <MDBCol md='12'>
                        <p className='font-small grey-text d-flex justify-content-end'>
                          Have not an account?
                          <a className='blue-text ml-1'>
                            Register
                          </a>
                        </p>
                      </MDBCol> */}
                    </MDBRow>
                  </MDBCardBody>
                  <div className='footer pt-3 mdb-color lighten-3'>
                    <MDBRow className='d-flex justify-content-center'>
                      <p className='font-small white-text mb-2 pt-3'>
                        or Log in with
                      </p>
                    </MDBRow>
                    <MDBRow className='mt-2 mb-3 d-flex justify-content-center'>
                      <a href='https://www.facebook.com/' className='fa-lg p-2 m-2 fb-ic'>
                        <MDBIcon
                          icon='facebook-f'
                          fab
                          size='lg'
                          className='white-text'
                        ></MDBIcon>
                      </a>
                      <a href='#!' className='fa-lg p-2 m-2 tw-ic'>
                        <MDBIcon
                          fab
                          icon='twitter'
                          size='lg'
                          className='white-text'
                        ></MDBIcon>
                      </a>
                      <a href='https://mail.google.com/mail/u/0/#inbox' className='fa-lg p-2 m-2 gplus-ic'>
                        <MDBIcon
                          fab
                          icon='google-plus-g'
                          size='lg'
                          className='white-text'
                        ></MDBIcon>
                      </a>
                    </MDBRow>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>

        {/* </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" //onClick={() => showModals("close") }
                      >
                          Close
                      </Button>
                    </Modal.Footer>
                </Modal> */}
    </MDBContainer>
    </center>   
  );
};

export default Login;