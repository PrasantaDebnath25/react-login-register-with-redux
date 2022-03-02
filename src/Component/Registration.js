import React, { useState, useEffect } from 'react';  
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Button } from 'react-bootstrap';
import Header from './Layout/Header'
import { useHistory } from "react-router-dom";

const Registration = () => {
  const [employee, setemployee] = useState({ name: '',  email: '', Password: '', confirmPass:''});  
  const [error, seterror] = useState({ nameErr: '',  emailErr: '', PasswordErr: '', confirmPassErr:'', formisValid: '' });  
  const history = useHistory();
  const clickSubmit = (e) => {
    e.preventDefault();    
    const data = { name:employee.name , email:employee.email, Password: employee.Password, confirmPass: employee.confirmPass};    
      console.log("Values are")
            // console.log(data.Email)
            // console.log(data.Password)
    console.log(data);
    console.log("Values are")  
    
    getValidation()
    if(error.formisValid === "true"){
      console.log("Done");
      //history.goBack()
      //window.location.reload(false);
       history.push("/");
      seterror({error:''}); 
      //this.setState({snakbaropen:true, snakbarmsg: 'Submitted Sucessfully', changeComp: true});
    }
    else{
      console.log("Not Validate");
      
    //this.setState({snakbaropen:true, snakbarmsg: 'Failed', changeComp: false});
    }
  }
  const getValidation = () => {
    
    seterror({...error,
          emailErr: (employee.email === '' ) ? 'Email id cannot be empty' : '',
          PasswordErr: (employee.Password === '' ) ? 'Password cannot be empty' : 
                        (employee.Password.length < 5) ? 'Password must be greater than 4 charecter' : '',
          confirmPassErr: (employee.Password === employee.confirmPass) ? '' : 'Password mismatched',
          formisValid: "true"
          
      });
      }
      // function asyncValidateRegisterInput(employee) {
      //   const { username, email, displayName } = employee;
      //   const user = { username, email, displayName };
      //   return authClient.validateRegisterData(user).catch((err) => {
      //     const errors = {};
      //     err.messages.forEach((item) => {
      //       errors[item.type] = item.message;
      //     });
      //     throw errors;
      //   }).then(() => Promise.resolve());
      // }

 
  const setData = (e) => {    
    e.persist();     
    console.log(e.target.value)
    setemployee({...employee, [e.target.name]: e.target.value});    
    
}
console.log(error)
  return (
    // <div>
      // {/* <Header /> */}
    <center>
    <div >
      
      <div>
        <MDBCol md="12">
          <MDBCard >
            <img 
              src={"https://picsum.photos/id/1/200/300"}
              // src={"https://loremflickr.com/320/240?random="+value}
              // src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
              className="img-fluid"
              alt="qwe"
            />
            <MDBCardBody className='mx-6'>
              <form >
                <div className='text-center'>
                      <h3 >
                        <strong>Sign Up</strong>
                      </h3>
                    </div>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    // icon="user"
                    required
                    value={employee.name} onChange={ setData }  name="name"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  
                  <MDBInput
                    label="Your email"
                    // icon="envelope"
                    value={employee.email} onChange={ setData } name="email"
                    group
                    type="email"
                    validate
                    id="mail"
                    error="wrong"
                    success="right"
                  />
                  <span style={{color: "red", display: "block"}}>{error.emailErr}</span>
                  <MDBInput
                    label="Your password"
                    // icon="lock"
                    value={employee.Password} onChange={ setData }  name="Password"
                    group
                    type="password"
                    mdbvalidate
                  />
                  <span style={{color: "red", display: "block"}}>{error.PasswordErr}</span>
                  <MDBInput
                    label="Confirm your password"
                    // icon="exclamation-triangle" confirmPass
                    value={employee.confirmPass} onChange={ setData }  name="confirmPass"
                    group
                    type="password"
                    validate
                    error="wrong Pass"
                    success="right"
                  />
                  <span style={{color: "red", display: "block"}}>{error.confirmPassErr}</span>
                </div>
                <div className="text-center py-4 mt-3">
                  <Button onClick={clickSubmit} type="submit">
                    Register
                  </Button>
                  
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
          
        </MDBCol>
      </div>
    </div>
    </center>
  );
};

export default Registration;