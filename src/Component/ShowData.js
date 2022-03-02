import React from 'react';
import axios from 'axios';
import {  MDBInput } from 'mdbreact';
import { Link, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'   
import { useHistory } from "react-router-dom";
import Header from './Layout/Header'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux/user/userActions'
import Card from './Card';
import './ShowData.css';
import AuthLayout from './AuthLayout';

function ShowData({ userData, fetchUsers }) {
    const history = useHistory();
    const [employee, setemployee] = useState({ Email: '', id: ''});  
    useEffect(() => {
        fetchUsers()
      }, [] )
      
    return(
        <AuthLayout>
        <div>
           <Header /> 
           { userData.loading ?
                    ( <h2>Loading</h2> ) : 
                    userData.error ? 
                       ( <h2>{userData.error}</h2> ) : (
                    <div>
                        <div >
                        { userData && userData.users && userData.users.map(data => {  
                            // className="flex-style2"
                            return  <div  key={ data.id }> {
                                data.id===5 && 
                                   
                <div>

                <div class="container emp-profile">
                <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={"https://picsum.photos/id/"+ data.id +"/200/300"} alt=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h2>
                                    { data.name }
                                    </h2>
                                    <h6>
                                        
                                    </h6>
                                    {/* <p class="proile-rating">RANKINGS : <span>8/10</span></p> */}
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a> */}
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6" >
                                                <p>{ data.id }</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{ data.name }</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{ data.email }</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{ data.phone }</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p> { data.address.street }, { data.address.city }. { data.address.zipcode } </p>
                                            </div>
                                        </div>
                                        
                            </div>
                            
                        </div>
                    </div>
                    {/* <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> */}
                </div>
                <div class="row">
                    {/* <div class="col-md-4">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div> */}
                    <div class="col-md-8">
                        
                    </div>
                </div>
            </form>           
        </div>
                </div>
                } </div>;
                // <div className="flex-style2" key={ data.id }> {<Card id={data.id} mail={data.email} add={ data.address.street } city={ data.address.city } zipcode={ data.address.zipcode } phn={ data.phone } website={ data.website } />}
                })
            }
            </div>
        </div>
        ) 
    }
        </div>
        </AuthLayout>
    )
}
const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
    fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowData);