import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import b from './Images/dislike.jpg'
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import './LoginStyle.css'

const Card = (props) => {
  // const [count, setCount] = useState(parseInt(localStorage.getItem("counterValue")))
  const history = useHistory();
  
  let value=Math.floor(Math.random() * Math.floor(100))
  const change = () => {
        localStorage.getItem("status") 
              ? history.push("/")
              : console.log('qw')
  }
  return (
    
    <MDBRow>
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard
      // className='card-image'
      //     style={{
      //       backgroundImage:
      //         "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"}}
      >
        
        <img 
          src={"https://picsum.photos/id/"+value+"/200/300"}
          // src={"https://loremflickr.com/320/240?random="+value}
          // src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
          className="img-fluid"
          alt="img"
        />

        <MDBCardBody>
          <MDBCardTitle> {props.names} </MDBCardTitle>
          <MDBCardText> Mail: {props.mail} </MDBCardText>
          <MDBCardText> Address: {props.add} {props.city} {props.zipcode}</MDBCardText>
          <MDBCardText> Phone: {props.phn} </MDBCardText>
          <MDBCardText> Website: {props.website} </MDBCardText>
          <button class="button"><span onClick={change}>Like </span></button>
          <button class="button"><span onClick={change}>Dislike </span></button>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
  )
}

export default Card;